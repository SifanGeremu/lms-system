import { FormEvent, useEffect, useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import AppShell from '@/components/layout/AppShell'
import { Button } from '@/components/common/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/common/Card'
import { Input } from '@/components/common/Input'
import { coursesApi, lessonsApi, modulesApi } from '@/services/api'
import { extractMessage } from '@/lib/http'
import { LessonItem, LessonType, ModuleItem } from '@/types'

function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
}

export default function CourseEditor() {
  const { courseId } = useParams()
  const isEdit = Boolean(courseId)
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [description, setDescription] = useState('')
  const [thumbnail, setThumbnail] = useState('')
  const [categoryId, setCategoryId] = useState(1)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [modules, setModules] = useState<ModuleItem[]>([])
  const [lessonsByModule, setLessonsByModule] = useState<Record<number, LessonItem[]>>({})

  const [moduleTitle, setModuleTitle] = useState('')
  const [lessonDraft, setLessonDraft] = useState<Record<number, { title: string; type: LessonType; content: string }>>({})

  useEffect(() => {
    if (!isEdit || !courseId) return

    coursesApi
      .edit(Number(courseId))
      .then(async (course) => {
        setTitle(course.title)
        setSlug(course.slug)
        setDescription(course.description ?? '')
        setThumbnail(course.thumbnail ?? '')
        setCategoryId(course.category_id)

        const modulesRes = await modulesApi.list(course.id)
        setModules(modulesRes)

        const lessonPairs = await Promise.all(modulesRes.map(async (module) => [module.id, await lessonsApi.list(module.id)] as const))
        const lessonMap = Object.fromEntries(lessonPairs)
        setLessonsByModule(lessonMap)
      })
      .catch((err) => setError(extractMessage(err)))
  }, [isEdit, courseId])

  const pageTitle = useMemo(() => (isEdit ? 'Edit Course' : 'Create Course'), [isEdit])

  const onSave = async (e: FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setError(null)

    try {
      if (isEdit && courseId) {
        await coursesApi.update(Number(courseId), {
          title,
          slug,
          description,
          thumbnail,
          category_id: categoryId,
        })
      } else {
        await coursesApi.create({
          title,
          slug,
          description,
          thumbnail,
          category_id: categoryId,
        })
      }

      navigate('/instructor/drafts')
    } catch (err) {
      setError(extractMessage(err))
    } finally {
      setSaving(false)
    }
  }

  const onAddModule = async () => {
    if (!courseId || !moduleTitle.trim()) return

    try {
      const created = await modulesApi.create(Number(courseId), { title: moduleTitle.trim() })
      setModules((prev) => [...prev, created].sort((a, b) => a.order - b.order))
      setModuleTitle('')
    } catch (err) {
      setError(extractMessage(err))
    }
  }

  const onDeleteModule = async (moduleId: number) => {
    try {
      await modulesApi.remove(moduleId)
      setModules((prev) => prev.filter((m) => m.id !== moduleId))
      setLessonsByModule((prev) => {
        const copy = { ...prev }
        delete copy[moduleId]
        return copy
      })
    } catch (err) {
      setError(extractMessage(err))
    }
  }

  const onAddLesson = async (moduleId: number) => {
    const draft = lessonDraft[moduleId]
    if (!draft?.title?.trim() || !draft.content.trim()) return

    try {
      const created = await lessonsApi.create(moduleId, {
        title: draft.title,
        type: draft.type,
        content: draft.content,
      })

      setLessonsByModule((prev) => ({
        ...prev,
        [moduleId]: [...(prev[moduleId] ?? []), created].sort((a, b) => a.order - b.order),
      }))

      setLessonDraft((prev) => ({
        ...prev,
        [moduleId]: { title: '', type: 'text', content: '' },
      }))
    } catch (err) {
      setError(extractMessage(err))
    }
  }

  const onDeleteLesson = async (moduleId: number, lessonId: number) => {
    try {
      await lessonsApi.remove(lessonId)
      setLessonsByModule((prev) => ({
        ...prev,
        [moduleId]: (prev[moduleId] ?? []).filter((l) => l.id !== lessonId),
      }))
    } catch (err) {
      setError(extractMessage(err))
    }
  }

  return (
    <AppShell>
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">{pageTitle}</h1>
          <Link to="/instructor/drafts"><Button variant="outline">Back</Button></Link>
        </div>

        {error && <p className="mb-5 rounded-md border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive">{error}</p>}

        <Card>
          <CardHeader><CardTitle>Course Details</CardTitle></CardHeader>
          <CardContent>
            <form onSubmit={onSave} className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-1 md:col-span-2">
                <label className="text-sm font-medium">Title</label>
                <Input value={title} onChange={(e) => { setTitle(e.target.value); if (!isEdit) setSlug(slugify(e.target.value)) }} required />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium">Slug</label>
                <Input value={slug} onChange={(e) => setSlug(slugify(e.target.value))} required />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium">Category ID</label>
                <Input type="number" value={categoryId} onChange={(e) => setCategoryId(Number(e.target.value) || 1)} required />
              </div>
              <div className="space-y-1 md:col-span-2">
                <label className="text-sm font-medium">Thumbnail URL</label>
                <Input value={thumbnail} onChange={(e) => setThumbnail(e.target.value)} placeholder="https://..." />
              </div>
              <div className="space-y-1 md:col-span-2">
                <label className="text-sm font-medium">Description</label>
                <textarea className="min-h-32 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" value={description} onChange={(e) => setDescription(e.target.value)} />
              </div>
              <div className="md:col-span-2 flex flex-wrap gap-2">
                <Button type="submit" isLoading={saving} disabled={saving}>{isEdit ? 'Save Changes' : 'Create Course'}</Button>
                {isEdit && courseId && <Button type="button" variant="outline" onClick={() => coursesApi.togglePublish(Number(courseId)).catch((err) => setError(extractMessage(err)))}>Toggle Publish</Button>}
              </div>
            </form>
          </CardContent>
        </Card>

        {isEdit && (
          <div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-2">
            <Card>
              <CardHeader><CardTitle>Modules</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Input value={moduleTitle} onChange={(e) => setModuleTitle(e.target.value)} placeholder="New module title" />
                  <Button type="button" onClick={onAddModule}>Add</Button>
                </div>

                <div className="space-y-3">
                  {modules.map((module) => (
                    <div key={module.id} className="rounded-md border border-border p-3">
                      <div className="mb-2 flex items-center justify-between">
                        <p className="font-medium">{module.order}. {module.title}</p>
                        <Button type="button" variant="ghost" onClick={() => onDeleteModule(module.id)}>Delete</Button>
                      </div>

                      <div className="space-y-2">
                        {(lessonsByModule[module.id] ?? []).map((lesson) => (
                          <div key={lesson.id} className="flex items-center justify-between rounded border border-border px-2 py-1 text-sm">
                            <Link to={`/lessons/${lesson.id}`} className="hover:text-primary">{lesson.order}. {lesson.title}</Link>
                            <Button type="button" variant="ghost" onClick={() => onDeleteLesson(module.id, lesson.id)}>Delete</Button>
                          </div>
                        ))}
                      </div>

                      <div className="mt-3 space-y-2 rounded-md border border-border p-2">
                        <Input
                          placeholder="Lesson title"
                          value={lessonDraft[module.id]?.title ?? ''}
                          onChange={(e) => setLessonDraft((prev) => ({ ...prev, [module.id]: { ...(prev[module.id] ?? { type: 'text', content: '' as string }), title: e.target.value } }))}
                        />
                        <select
                          className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
                          value={lessonDraft[module.id]?.type ?? 'text'}
                          onChange={(e) => setLessonDraft((prev) => ({ ...prev, [module.id]: { ...(prev[module.id] ?? { title: '', content: '' }), type: e.target.value as LessonType } }))}
                        >
                          <option value="text">Text</option>
                          <option value="video">Video</option>
                          <option value="file">File</option>
                          <option value="embed">Embed</option>
                        </select>
                        <textarea
                          className="min-h-24 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                          placeholder="Lesson content"
                          value={lessonDraft[module.id]?.content ?? ''}
                          onChange={(e) => setLessonDraft((prev) => ({ ...prev, [module.id]: { ...(prev[module.id] ?? { title: '', type: 'text' }), content: e.target.value } }))}
                        />
                        <Button type="button" onClick={() => onAddLesson(module.id)}>Add Lesson</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </section>
    </AppShell>
  )
}
