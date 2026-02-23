import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { authApi } from '@/services/api';
import { storage } from '@/lib/storage';
const AuthContext = createContext(undefined);
export function AuthProvider({ children }) {
    const [user, setUser] = useState(storage.getUser());
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const token = storage.getToken();
        if (!token) {
            setIsLoading(false);
            return;
        }
        authApi
            .me()
            .then((freshUser) => {
            setUser((prev) => ({ ...freshUser, roles: prev?.roles?.length ? prev.roles : freshUser.roles }));
            storage.setUser(freshUser);
        })
            .catch(() => {
            storage.clearAuth();
            setUser(null);
        })
            .finally(() => setIsLoading(false));
    }, []);
    const login = useCallback(async (email, password) => {
        const { token, user: authUser } = await authApi.login(email, password);
        storage.setToken(token);
        storage.setUser(authUser);
        setUser(authUser);
    }, []);
    const signup = useCallback(async (name, email, password) => {
        const { token, user: authUser } = await authApi.register(name, email, password);
        storage.setToken(token);
        storage.setUser(authUser);
        setUser(authUser);
    }, []);
    const logout = useCallback(async () => {
        try {
            await authApi.logout();
        }
        finally {
            storage.clearAuth();
            setUser(null);
        }
    }, []);
    const hasRole = useCallback((roles) => {
        if (!user)
            return false;
        return roles.some((role) => user.roles.includes(role));
    }, [user]);
    const value = useMemo(() => ({
        user,
        isLoading,
        isAuthenticated: Boolean(user),
        login,
        signup,
        logout,
        hasRole,
    }), [user, isLoading, login, signup, logout, hasRole]);
    return _jsx(AuthContext.Provider, { value: value, children: children });
}
export function useAuth() {
    const context = useContext(AuthContext);
    if (!context)
        throw new Error('useAuth must be used within AuthProvider');
    return context;
}
//# sourceMappingURL=AuthContext.js.map