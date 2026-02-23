import { AuthResponse, User } from '@/types';
export declare const authApi: {
    login(email: string, password: string): Promise<AuthResponse>;
    register(name: string, email: string, password: string): Promise<AuthResponse>;
    logout(): Promise<void>;
    me(): Promise<User>;
};
//# sourceMappingURL=auth.api.d.ts.map