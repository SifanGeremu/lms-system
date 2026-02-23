import { useState, useCallback, useEffect } from 'react';
export const useApi = (apiCall, options = {}) => {
    const { immediate = true, onSuccess, onError } = options;
    const [state, setState] = useState({
        data: null,
        loading: immediate,
        error: null,
    });
    const execute = useCallback(async () => {
        setState((prev) => ({ ...prev, loading: true, error: null }));
        try {
            const result = await apiCall();
            setState({ data: result, loading: false, error: null });
            onSuccess?.(result);
            return result;
        }
        catch (error) {
            const axiosError = error;
            setState((prev) => ({ ...prev, loading: false, error: axiosError }));
            onError?.(axiosError);
            throw error;
        }
    }, [apiCall, onSuccess, onError]);
    useEffect(() => {
        if (immediate) {
            execute();
        }
    }, []);
    return {
        ...state,
        execute,
    };
};
//# sourceMappingURL=useApi.js.map