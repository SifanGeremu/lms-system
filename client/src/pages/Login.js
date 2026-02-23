import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { extractMessage } from '@/lib/http';
import { useAuth } from '@/context/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/common/Card';
import { Input } from '@/components/common/Input';
import { Button } from '@/components/common/Button';
export default function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const onSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);
        try {
            await login(email, password);
            navigate('/my-courses');
        }
        catch (err) {
            setError(extractMessage(err));
        }
        finally {
            setLoading(false);
        }
    };
    return (_jsx("div", { className: "grid min-h-[calc(100vh-64px)] place-items-center px-4 py-10", children: _jsxs(Card, { className: "w-full max-w-md", children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Welcome back" }), _jsx(CardDescription, { children: "Log in to continue learning." })] }), _jsxs(CardContent, { children: [_jsxs("form", { className: "space-y-4", onSubmit: onSubmit, children: [error && _jsx("p", { className: "rounded-md border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive", children: error }), _jsxs("div", { className: "space-y-1", children: [_jsx("label", { htmlFor: "email", className: "text-sm font-medium", children: "Email" }), _jsx(Input, { id: "email", type: "email", value: email, onChange: (e) => setEmail(e.target.value), required: true })] }), _jsxs("div", { className: "space-y-1", children: [_jsx("label", { htmlFor: "password", className: "text-sm font-medium", children: "Password" }), _jsx(Input, { id: "password", type: "password", value: password, onChange: (e) => setPassword(e.target.value), required: true })] }), _jsx(Button, { className: "w-full", isLoading: loading, disabled: loading, type: "submit", children: "Log in" })] }), _jsxs("p", { className: "mt-4 text-sm text-muted-foreground", children: ["New here? ", _jsx(Link, { to: "/signup", className: "text-primary hover:underline", children: "Create an account" })] })] })] }) }));
}
//# sourceMappingURL=Login.js.map