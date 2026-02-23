import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import AppShell from '@/components/layout/AppShell';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/common/Card';
import { useAuth } from '@/context/AuthContext';
export default function Profile() {
    const { user } = useAuth();
    return (_jsx(AppShell, { children: _jsx("section", { className: "mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8", children: _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Profile" }) }), _jsxs(CardContent, { className: "space-y-3 text-sm", children: [_jsxs("p", { children: [_jsx("span", { className: "text-muted-foreground", children: "Name:" }), " ", user?.name] }), _jsxs("p", { children: [_jsx("span", { className: "text-muted-foreground", children: "Email:" }), " ", user?.email] }), _jsxs("p", { children: [_jsx("span", { className: "text-muted-foreground", children: "Roles:" }), " ", user?.roles.join(', ')] })] })] }) }) }));
}
//# sourceMappingURL=Profile.js.map