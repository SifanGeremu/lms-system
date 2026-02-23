import { useState } from 'react';
export const useFormHandler = (options = {}) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);
    const [fieldErrors, setFieldErrors] = useState({});
    const handleSubmit = async (callback) => {
        setIsSubmitting(true);
        setError(null);
        setFieldErrors({});
        try {
            await callback();
            options.onSuccess?.();
        }
        catch (err) {
            const axiosError = err;
            // Handle validation errors
            if (axiosError.response?.status === 422) {
                const errors = (axiosError.response?.data?.errors || {});
                setFieldErrors(errors);
                const firstError = Object.values(errors)[0]?.[0];
                if (firstError) {
                    setError(firstError);
                }
            }
            else {
                const message = axiosError.response?.data?.message ||
                    axiosError.message ||
                    'An error occurred';
                setError(message);
            }
            options.onError?.(axiosError);
        }
        finally {
            setIsSubmitting(false);
        }
    };
    return {
        isSubmitting,
        error,
        fieldErrors,
        handleSubmit,
        setError,
        setFieldErrors,
    };
};
//# sourceMappingURL=useFormHandler.js.map