import { useState, useCallback, useEffect } from 'react'
import { AxiosError } from 'axios'

interface UseApiState<T> {
  data: T | null
  loading: boolean
  error: AxiosError | null
}

interface UseApiOptions {
  immediate?: boolean
  onSuccess?: (data: any) => void
  onError?: (error: AxiosError) => void
}

export const useApi = <T,>(
  apiCall: () => Promise<T>,
  options: UseApiOptions = {}
) => {
  const { immediate = true, onSuccess, onError } = options
  const [state, setState] = useState<UseApiState<T>>({
    data: null,
    loading: immediate,
    error: null,
  })

  const execute = useCallback(async () => {
    setState((prev) => ({ ...prev, loading: true, error: null }))
    try {
      const result = await apiCall()
      setState({ data: result, loading: false, error: null })
      onSuccess?.(result)
      return result
    } catch (error) {
      const axiosError = error as AxiosError
      setState((prev) => ({ ...prev, loading: false, error: axiosError }))
      onError?.(axiosError)
      throw error
    }
  }, [apiCall, onSuccess, onError])

  useEffect(() => {
    if (immediate) {
      execute()
    }
  }, [])

  return {
    ...state,
    execute,
  }
}
