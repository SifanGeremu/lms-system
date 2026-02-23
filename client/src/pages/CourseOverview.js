import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import AppShell from '@/components/layout/AppShell';
import { Button } from '@/components/common/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/common/Card';
import { useAuth } from '@/context/AuthContext';
import { extractMessage } from '@/lib/http';
import { coursesApi, enrollmentApi } from '@/services/api';
function parseCourseRef(courseRef) {
    const match = courseRef.match(/^(\d+)-(.+)$/);
    if (match) {
        return { id: Number(match[1]), slug: match[2] };
    }
    return { id: null, slug: courseRef };
}
export default function CourseOverview() {
    const { courseRef = '' } = useParams();
    const { isAuthenticated, hasRole } = useAuth();
    const [course, setCourse] = useState(null);
    const [enrollment, setEnrollment] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [enrolling, setEnrolling] = useState(false);
    const parsed = useMemo(() => parseCourseRef(courseRef), [courseRef]);
    useEffect(() => {
        setLoading(true);
        setError(null);
        coursesApi
            .show(parsed.slug)
            .then(async (res) => {
            setCourse(res);
            if (isAuthenticated && parsed.id) {
                const status = await enrollmentApi.status(parsed.id).catch(() => null);
                if (status)
                    setEnrollment(status);
            }
        })
            .catch((err) => setError(extractMessage(err)))
            .finally(() => setLoading(false));
    }, [isAuthenticated, parsed.id, parsed.slug]);
    const handleEnroll = async () => {
        if (!parsed.id) {
            setError('Enrollment is unavailable because this route has no course id. Use the course list page.');
            return;
        }
        setEnrolling(true);
        setError(null);
        try {
            await enrollmentApi.enroll(parsed.id);
            setEnrollment({ status: 'enrolled', progress_percentage: 0, completed_at: null });
        }
        catch (err) {
            setError(extractMessage(err));
        }
        finally {
            setEnrolling(false);
        }
    };
    return (_jsx(AppShell, { children: _jsxs("section", { className: "mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8", children: [loading && _jsx("p", { className: "text-sm text-muted-foreground", children: "Loading course..." }), error && _jsx("p", { className: "mb-4 rounded-md border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive", children: error }), course && (_jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { className: "text-3xl", children: course.title }), _jsxs("p", { className: "text-sm text-muted-foreground", children: ["Instructor: ", course.instructor?.name ?? 'N/A'] })] }), _jsxs(CardContent, { className: "space-y-6", children: [_jsx("p", { className: "leading-7 text-foreground/90", children: course.description || 'No description provided yet.' }), _jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [_jsx("span", { className: "rounded-full border border-border px-3 py-1 text-xs", children: course.category?.name ?? 'Uncategorized' }), enrollment?.status === 'enrolled' && (_jsx("span", { className: "rounded-full bg-success/15 px-3 py-1 text-xs font-medium text-success", children: "Enrolled" }))] }), isAuthenticated ? (enrollment?.status === 'enrolled' ? (_jsx(Link, { to: "/my-courses", children: _jsx(Button, { children: "Go to My Courses" }) })) : (_jsx(Button, { onClick: handleEnroll, isLoading: enrolling, disabled: enrolling, children: "Enroll Now" }))) : (_jsx(Link, { to: "/login", children: _jsx(Button, { children: "Login to Enroll" }) })), isAuthenticated && hasRole(['instructor', 'admin']) && (_jsx("p", { className: "text-xs text-muted-foreground", children: "Tip: open your draft list to edit modules and lessons." }))] })] }))] }) }));
}
//# sourceMappingURL=CourseOverview.js.map