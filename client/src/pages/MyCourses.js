import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AppShell from '@/components/layout/AppShell';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/common/Card';
import { Button } from '@/components/common/Button';
import { coursesApi } from '@/services/api';
import { extractMessage } from '@/lib/http';
export default function MyCourses() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        coursesApi
            .myCourses()
            .then((res) => setItems(res.data))
            .catch((err) => setError(extractMessage(err)))
            .finally(() => setLoading(false));
    }, []);
    return (_jsx(AppShell, { children: _jsxs("section", { className: "mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8", children: [_jsx("h1", { className: "text-3xl font-bold tracking-tight", children: "My Courses" }), _jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Courses you are currently enrolled in." }), error && _jsx("p", { className: "mt-4 rounded-md border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive", children: error }), loading && _jsx("p", { className: "mt-4 text-sm text-muted-foreground", children: "Loading..." }), _jsx("div", { className: "mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3", children: items.map((course) => (_jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { className: "text-xl", children: course.title }) }), _jsxs(CardContent, { className: "space-y-3", children: [_jsx("p", { className: "text-sm text-muted-foreground", children: course.category?.name ?? 'Uncategorized' }), _jsxs("p", { className: "text-sm text-muted-foreground", children: ["Instructor: ", course.instructor?.name ?? 'N/A'] }), _jsx("div", { className: "flex gap-2", children: _jsx(Link, { className: "flex-1", to: `/courses/${course.id}-${course.slug}`, children: _jsx(Button, { className: "w-full", variant: "outline", children: "Overview" }) }) })] })] }, course.id))) }), !loading && items.length === 0 && (_jsx(Card, { className: "mt-6", children: _jsx(CardContent, { className: "p-6 text-sm text-muted-foreground", children: "You are not enrolled in any course yet." }) }))] }) }));
}
//# sourceMappingURL=MyCourses.js.map