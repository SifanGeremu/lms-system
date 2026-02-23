import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AppShell from '@/components/layout/AppShell';
import { Button } from '@/components/common/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/common/Card';
import { coursesApi } from '@/services/api';
import { extractMessage } from '@/lib/http';
export default function InstructorDrafts() {
    const [drafts, setDrafts] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        coursesApi
            .myDrafts()
            .then(setDrafts)
            .catch((err) => setError(extractMessage(err)));
    }, []);
    return (_jsx(AppShell, { children: _jsxs("section", { className: "mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "mb-6 flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("h1", { className: "text-3xl font-bold tracking-tight", children: "Instructor Workspace" }), _jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Manage your draft courses and structure content." })] }), _jsx(Link, { to: "/instructor/courses/new", children: _jsx(Button, { children: "Create Course" }) })] }), error && _jsx("p", { className: "mb-5 rounded-md border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive", children: error }), drafts.length === 0 ? (_jsx(Card, { children: _jsx(CardContent, { className: "p-6 text-sm text-muted-foreground", children: "No draft courses yet." }) })) : (_jsx("div", { className: "grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3", children: drafts.map((course) => (_jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { className: "text-xl", children: course.title }) }), _jsxs(CardContent, { className: "space-y-3", children: [_jsx("p", { className: "line-clamp-2 text-sm text-muted-foreground", children: course.description || 'No description yet.' }), _jsxs("div", { className: "flex gap-2", children: [_jsx(Link, { to: `/instructor/courses/${course.id}/edit`, className: "flex-1", children: _jsx(Button, { className: "w-full", variant: "outline", children: "Edit" }) }), _jsx(Link, { to: `/courses/${course.id}-${course.slug}`, className: "flex-1", children: _jsx(Button, { className: "w-full", children: "Preview" }) })] })] })] }, course.id))) }))] }) }));
}
//# sourceMappingURL=InstructorDrafts.js.map