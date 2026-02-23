import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AppShell from '@/components/layout/AppShell';
import { Button } from '@/components/common/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/common/Card';
import { extractMessage } from '@/lib/http';
import { lessonsApi } from '@/services/api';
export default function LessonViewer() {
    const { lessonId } = useParams();
    const [lesson, setLesson] = useState(null);
    const [completion, setCompletion] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        if (!lessonId)
            return;
        lessonsApi
            .show(Number(lessonId))
            .then(setLesson)
            .catch((err) => setError(extractMessage(err)));
    }, [lessonId]);
    const markComplete = async () => {
        if (!lessonId)
            return;
        setError(null);
        try {
            const res = await lessonsApi.complete(Number(lessonId));
            setCompletion(res);
        }
        catch (err) {
            setError(extractMessage(err));
        }
    };
    return (_jsx(AppShell, { children: _jsxs("section", { className: "mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8", children: [error && _jsx("p", { className: "mb-4 rounded-md border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive", children: error }), !lesson ? (_jsx("p", { className: "text-sm text-muted-foreground", children: "Loading lesson..." })) : (_jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: lesson.title }), _jsxs("p", { className: "text-sm text-muted-foreground", children: ["Type: ", lesson.type] })] }), _jsxs(CardContent, { className: "space-y-6", children: [lesson.description && _jsx("p", { className: "text-sm text-muted-foreground", children: lesson.description }), _jsx("article", { className: "rounded-md border border-border bg-card p-4 leading-7 whitespace-pre-wrap", children: lesson.content }), _jsxs("div", { className: "flex items-center gap-4", children: [_jsx(Button, { onClick: markComplete, children: "Mark Complete" }), completion && (_jsxs("p", { className: "text-sm text-success", children: ["Progress updated: ", completion.progress_percentage, "%"] }))] })] })] }))] }) }));
}
//# sourceMappingURL=LessonViewer.js.map