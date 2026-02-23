import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
export default function ProtectedRoute({ children, requiredRoles }) {
    const { isAuthenticated, isLoading, hasRole } = useAuth();
    if (isLoading) {
        return (_jsx("div", { className: "min-h-screen grid place-items-center bg-background", children: _jsx("div", { className: "h-10 w-10 animate-spin rounded-full border-4 border-primary border-r-transparent" }) }));
    }
    if (!isAuthenticated)
        return _jsx(Navigate, { to: "/login", replace: true });
    if (requiredRoles && requiredRoles.length > 0 && !hasRole(requiredRoles)) {
        return _jsx(Navigate, { to: "/", replace: true });
    }
    return _jsx(_Fragment, { children: children });
}
//# sourceMappingURL=ProtectedRoute.js.map