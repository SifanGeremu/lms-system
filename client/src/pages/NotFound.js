import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import AppShell from '@/components/layout/AppShell';
import { Button } from '@/components/common/Button';
export default function NotFound() {
    return (_jsx(AppShell, { children: _jsx("section", { className: "grid min-h-[60vh] place-items-center px-4 text-center", children: _jsxs("div", { children: [_jsx("h1", { className: "text-4xl font-bold", children: "Page not found" }), _jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: "The route you requested does not exist." }), _jsx(Link, { to: "/courses", className: "mt-6 inline-block", children: _jsx(Button, { children: "Back to Courses" }) })] }) }) }));
}
//# sourceMappingURL=NotFound.js.map