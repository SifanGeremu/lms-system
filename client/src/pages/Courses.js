import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { coursesApi } from '@/services/api';
import { extractMessage } from '@/lib/http';
import AppShell from '@/components/layout/AppShell';
import { Button } from '@/components/common/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/common/Card';
import { Input } from '@/components/common/Input';
export default function Courses() {
    const [items, setItems] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        setLoading(true);
        setError(null);
        coursesApi
            .list({ search: query || undefined, perPage: 12 })
            .then((res) => setItems(res.data))
            .catch((err) => setError(extractMessage(err)))
            .finally(() => setLoading(false));
    }, [query]);
    const emptyMessage = useMemo(() => {
        if (query)
            return `No courses found for "${query}".`;
        return 'No published courses are available right now.';
    }, [query]);
    const onSearch = (e) => {
        e.preventDefault();
        setQuery(search.trim());
    };
    return (_jsx(AppShell, { children: _jsxs("section", { className: "mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between", children: [_jsxs("div", { children: [_jsx("h1", { className: "text-3xl font-bold tracking-tight", children: "Explore Courses" }), _jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Browse published courses and start learning." })] }), _jsxs("form", { onSubmit: onSearch, className: "flex w-full max-w-xl gap-2", children: [_jsx(Input, { value: search, onChange: (e) => setSearch(e.target.value), placeholder: "Search by title or description" }), _jsx(Button, { type: "submit", children: "Search" })] })] }), error && _jsx("p", { className: "mb-5 rounded-md border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive", children: error }), loading && _jsx("p", { className: "text-sm text-muted-foreground", children: "Loading courses..." }), !loading && items.length === 0 && (_jsx(Card, { children: _jsx(CardContent, { className: "p-6 text-sm text-muted-foreground", children: emptyMessage }) })), _jsx("div", { className: "grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3", children: items.map((course) => (_jsxs(Card, { className: "h-full", children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { className: "text-xl", children: course.title }), _jsx(CardDescription, { className: "line-clamp-2", children: course.category?.name ?? 'Uncategorized' })] }), _jsxs(CardContent, { className: "space-y-4", children: [_jsx("p", { className: "line-clamp-3 text-sm text-muted-foreground", children: course.instructor?.name ? `By ${course.instructor.name}` : 'Instructor TBA' }), _jsx(Link, { to: `/courses/${course.id}-${course.slug}`, children: _jsx(Button, { className: "w-full", children: "View Details" }) })] })] }, course.id))) })] }) }));
}
//# sourceMappingURL=Courses.js.map