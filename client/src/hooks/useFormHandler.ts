import { useState } from 'react'
import { AxiosError } from 'axios'

interface FormHandlerOptions {
  onSuccess?: () => void
  onError?: (error: AxiosError) => void
}

export const useFormHandler = (options: FormHandlerOptions = {}) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({})

  const handleSubmit = async (
    callback: () => Promise<void>
  ) => {
    setIsSubmitting(true)
    setError(null)
    setFieldErrors({})

    try {
      await callback()
      options.onSuccess?.()
    } catch (err) {
      const axiosError = err as AxiosError<any>
      
      // Handle validation errors
      if (axiosError.response?.status === 422) {
        const errors = (axiosError.response?.data?.errors || {}) as Record<string, string[]>
        setFieldErrors(errors)
        const firstError = Object.values(errors)[0]?.[0]
        if (firstError) {
          setError(firstError)
        }
      } else {
        const message = (axiosError.response?.data as any)?.message || 
                       axiosError.message || 
                       'An error occurred'
        setError(message)
      }

      options.onError?.(axiosError)
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    isSubmitting,
    error,
    fieldErrors,
    handleSubmit,
    setError,
    setFieldErrors,
  }
}
