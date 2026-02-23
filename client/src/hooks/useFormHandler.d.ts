import { AxiosError } from 'axios';
interface FormHandlerOptions {
    onSuccess?: () => void;
    onError?: (error: AxiosError) => void;
}
export declare const useFormHandler: (options?: FormHandlerOptions) => {
    isSubmitting: boolean;
    error: string | null;
    fieldErrors: Record<string, string[]>;
    handleSubmit: (callback: () => Promise<void>) => Promise<void>;
    setError: import("react").Dispatch<import("react").SetStateAction<string | null>>;
    setFieldErrors: import("react").Dispatch<import("react").SetStateAction<Record<string, string[]>>>;
};
export {};
//# sourceMappingURL=useFormHandler.d.ts.map