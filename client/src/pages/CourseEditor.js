import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import AppShell from '@/components/layout/AppShell';
import { Button } from '@/components/common/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/common/Card';
import { Input } from '@/components/common/Input';
import { coursesApi, lessonsApi, modulesApi } from '@/services/api';
import { extractMessage } from '@/lib/http';
function slugify(value) {
    return value
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-');
}
export default function CourseEditor() {
    const { courseId } = useParams();
    const isEdit = Boolean(courseId);
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [description, setDescription] = useState('');
    const [thumbnail, setThumbnail] = useState('');
    const [categoryId, setCategoryId] = useState(1);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState(null);
    const [modules, setModules] = useState([]);
    const [lessonsByModule, setLessonsByModule] = useState({});
    const [moduleTitle, setModuleTitle] = useState('');
    const [lessonDraft, setLessonDraft] = useState({});
    useEffect(() => {
        if (!isEdit || !courseId)
            return;
        coursesApi
            .edit(Number(courseId))
            .then(async (course) => {
            setTitle(course.title);
            setSlug(course.slug);
            setDescription(course.description ?? '');
            setThumbnail(course.thumbnail ?? '');
            setCategoryId(course.category_id);
            const modulesRes = await modulesApi.list(course.id);
            setModules(modulesRes);
            const lessonPairs = await Promise.all(modulesRes.map(async (module) => [module.id, await lessonsApi.list(module.id)]));
            const lessonMap = Object.fromEntries(lessonPairs);
            setLessonsByModule(lessonMap);
        })
            .catch((err) => setError(extractMessage(err)));
    }, [isEdit, courseId]);
    const pageTitle = useMemo(() => (isEdit ? 'Edit Course' : 'Create Course'), [isEdit]);
    const onSave = async (e) => {
        e.preventDefault();
        setSaving(true);
        setError(null);
        try {
            if (isEdit && courseId) {
                await coursesApi.update(Number(courseId), {
                    title,
                    slug,
                    description,
                    thumbnail,
                    category_id: categoryId,
                });
            }
            else {
                await coursesApi.create({
                    title,
                    slug,
                    description,
                    thumbnail,
                    category_id: categoryId,
                });
            }
            navigate('/instructor/drafts');
        }
        catch (err) {
            setError(extractMessage(err));
        }
        finally {
            setSaving(false);
        }
    };
    const onAddModule = async () => {
        if (!courseId || !moduleTitle.trim())
            return;
        try {
            const created = await modulesApi.create(Number(courseId), { title: moduleTitle.trim() });
            setModules((prev) => [...prev, created].sort((a, b) => a.order - b.order));
            setModuleTitle('');
        }
        catch (err) {
            setError(extractMessage(err));
        }
    };
    const onDeleteModule = async (moduleId) => {
        try {
            await modulesApi.remove(moduleId);
            setModules((prev) => prev.filter((m) => m.id !== moduleId));
            setLessonsByModule((prev) => {
                const copy = { ...prev };
                delete copy[moduleId];
                return copy;
            });
        }
        catch (err) {
            setError(extractMessage(err));
        }
    };
    const onAddLesson = async (moduleId) => {
        const draft = lessonDraft[moduleId];
        if (!draft?.title?.trim() || !draft.content.trim())
            return;
        try {
            const created = await lessonsApi.create(moduleId, {
                title: draft.title,
                type: draft.type,
                content: draft.content,
            });
            setLessonsByModule((prev) => ({
                ...prev,
                [moduleId]: [...(prev[moduleId] ?? []), created].sort((a, b) => a.order - b.order),
            }));
            setLessonDraft((prev) => ({
                ...prev,
                [moduleId]: { title: '', type: 'text', content: '' },
            }));
        }
        catch (err) {
            setError(extractMessage(err));
        }
    };
    const onDeleteLesson = async (moduleId, lessonId) => {
        try {
            await lessonsApi.remove(lessonId);
            setLessonsByModule((prev) => ({
                ...prev,
                [moduleId]: (prev[moduleId] ?? []).filter((l) => l.id !== lessonId),
            }));
        }
        catch (err) {
            setError(extractMessage(err));
        }
    };
    return (_jsx(AppShell, { children: _jsxs("section", { className: "mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "mb-6 flex items-center justify-between", children: [_jsx("h1", { className: "text-3xl font-bold tracking-tight", children: pageTitle }), _jsx(Link, { to: "/instructor/drafts", children: _jsx(Button, { variant: "outline", children: "Back" }) })] }), error && _jsx("p", { className: "mb-5 rounded-md border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive", children: error }), _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Course Details" }) }), _jsx(CardContent, { children: _jsxs("form", { onSubmit: onSave, className: "grid grid-cols-1 gap-4 md:grid-cols-2", children: [_jsxs("div", { className: "space-y-1 md:col-span-2", children: [_jsx("label", { className: "text-sm font-medium", children: "Title" }), _jsx(Input, { value: title, onChange: (e) => { setTitle(e.target.value); if (!isEdit)
                                                    setSlug(slugify(e.target.value)); }, required: true })] }), _jsxs("div", { className: "space-y-1", children: [_jsx("label", { className: "text-sm font-medium", children: "Slug" }), _jsx(Input, { value: slug, onChange: (e) => setSlug(slugify(e.target.value)), required: true })] }), _jsxs("div", { className: "space-y-1", children: [_jsx("label", { className: "text-sm font-medium", children: "Category ID" }), _jsx(Input, { type: "number", value: categoryId, onChange: (e) => setCategoryId(Number(e.target.value) || 1), required: true })] }), _jsxs("div", { className: "space-y-1 md:col-span-2", children: [_jsx("label", { className: "text-sm font-medium", children: "Thumbnail URL" }), _jsx(Input, { value: thumbnail, onChange: (e) => setThumbnail(e.target.value), placeholder: "https://..." })] }), _jsxs("div", { className: "space-y-1 md:col-span-2", children: [_jsx("label", { className: "text-sm font-medium", children: "Description" }), _jsx("textarea", { className: "min-h-32 w-full rounded-md border border-input bg-background px-3 py-2 text-sm", value: description, onChange: (e) => setDescription(e.target.value) })] }), _jsxs("div", { className: "md:col-span-2 flex flex-wrap gap-2", children: [_jsx(Button, { type: "submit", isLoading: saving, disabled: saving, children: isEdit ? 'Save Changes' : 'Create Course' }), isEdit && courseId && _jsx(Button, { type: "button", variant: "outline", onClick: () => coursesApi.togglePublish(Number(courseId)).catch((err) => setError(extractMessage(err))), children: "Toggle Publish" })] })] }) })] }), isEdit && (_jsx("div", { className: "mt-8 grid grid-cols-1 gap-6 xl:grid-cols-2", children: _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Modules" }) }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { className: "flex gap-2", children: [_jsx(Input, { value: moduleTitle, onChange: (e) => setModuleTitle(e.target.value), placeholder: "New module title" }), _jsx(Button, { type: "button", onClick: onAddModule, children: "Add" })] }), _jsx("div", { className: "space-y-3", children: modules.map((module) => (_jsxs("div", { className: "rounded-md border border-border p-3", children: [_jsxs("div", { className: "mb-2 flex items-center justify-between", children: [_jsxs("p", { className: "font-medium", children: [module.order, ". ", module.title] }), _jsx(Button, { type: "button", variant: "ghost", onClick: () => onDeleteModule(module.id), children: "Delete" })] }), _jsx("div", { className: "space-y-2", children: (lessonsByModule[module.id] ?? []).map((lesson) => (_jsxs("div", { className: "flex items-center justify-between rounded border border-border px-2 py-1 text-sm", children: [_jsxs(Link, { to: `/lessons/${lesson.id}`, className: "hover:text-primary", children: [lesson.order, ". ", lesson.title] }), _jsx(Button, { type: "button", variant: "ghost", onClick: () => onDeleteLesson(module.id, lesson.id), children: "Delete" })] }, lesson.id))) }), _jsxs("div", { className: "mt-3 space-y-2 rounded-md border border-border p-2", children: [_jsx(Input, { placeholder: "Lesson title", value: lessonDraft[module.id]?.title ?? '', onChange: (e) => setLessonDraft((prev) => ({ ...prev, [module.id]: { ...(prev[module.id] ?? { type: 'text', content: '' }), title: e.target.value } })) }), _jsxs("select", { className: "h-10 w-full rounded-md border border-input bg-background px-3 text-sm", value: lessonDraft[module.id]?.type ?? 'text', onChange: (e) => setLessonDraft((prev) => ({ ...prev, [module.id]: { ...(prev[module.id] ?? { title: '', content: '' }), type: e.target.value } })), children: [_jsx("option", { value: "text", children: "Text" }), _jsx("option", { value: "video", children: "Video" }), _jsx("option", { value: "file", children: "File" }), _jsx("option", { value: "embed", children: "Embed" })] }), _jsx("textarea", { className: "min-h-24 w-full rounded-md border border-input bg-background px-3 py-2 text-sm", placeholder: "Lesson content", value: lessonDraft[module.id]?.content ?? '', onChange: (e) => setLessonDraft((prev) => ({ ...prev, [module.id]: { ...(prev[module.id] ?? { title: '', type: 'text' }), content: e.target.value } })) }), _jsx(Button, { type: "button", onClick: () => onAddLesson(module.id), children: "Add Lesson" })] })] }, module.id))) })] })] }) }))] }) }));
}
//# sourceMappingURL=CourseEditor.js.map