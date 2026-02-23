import { AxiosError } from 'axios';
interface UseApiOptions {
    immediate?: boolean;
    onSuccess?: (data: any) => void;
    onError?: (error: AxiosError) => void;
}
export declare const useApi: <T>(apiCall: () => Promise<T>, options?: UseApiOptions) => {
    execute: () => Promise<T>;
    data: T | null;
    loading: boolean;
    error: AxiosError | null;
};
export {};
//# sourceMappingURL=useApi.d.ts.map