import axios, { AxiosError, AxiosResponse } from 'axios'
import { storage } from '@/lib/storage'

const baseURL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api'

export const http = axios.create({
  baseURL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

http.interceptors.request.use((config) => {
  const token = storage.getToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

http.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      storage.clearAuth()
      if (window.location.pathname !== '/login') {
        window.location.href = '/login'
      }
    }
    return Promise.reject(error)
  }
)

export function unwrap<T>(payload: unknown): T {
  if (payload && typeof payload === 'object' && 'data' in (payload as Record<string, unknown>)) {
    const first = (payload as { data: unknown }).data
    if (first && typeof first === 'object' && 'data' in (first as Record<string, unknown>)) {
      return (first as { data: T }).data
    }
    return first as T
  }

  return payload as T
}

export function extractMessage(error: unknown): string {
  if (axios.isAxiosError(error)) {
    const data = error.response?.data as { message?: string; errors?: Record<string, string[]> } | undefined
    if (data?.message) return data.message
    const first = data?.errors ? Object.values(data.errors)[0]?.[0] : undefined
    if (first) return first
  }

  return 'Something went wrong. Please try again.'
}
