import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AppShell from '@/components/layout/AppShell'
import { Button } from '@/components/common/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/common/Card'
import { extractMessage } from '@/lib/http'
import { lessonsApi } from '@/services/api'
import { CompleteLessonResult, LessonItem } from '@/types'

export default function LessonViewer() {
  const { lessonId } = useParams()
  const [lesson, setLesson] = useState<LessonItem | null>(null)
  const [completion, setCompletion] = useState<CompleteLessonResult | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!lessonId) return

    lessonsApi
      .show(Number(lessonId))
      .then(setLesson)
      .catch((err) => setError(extractMessage(err)))
  }, [lessonId])

  const markComplete = async () => {
    if (!lessonId) return
    setError(null)

    try {
      const res = await lessonsApi.complete(Number(lessonId))
      setCompletion(res)
    } catch (err) {
      setError(extractMessage(err))
    }
  }

  return (
    <AppShell>
      <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        {error && <p className="mb-4 rounded-md border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive">{error}</p>}

        {!lesson ? (
          <p className="text-sm text-muted-foreground">Loading lesson...</p>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>{lesson.title}</CardTitle>
              <p className="text-sm text-muted-foreground">Type: {lesson.type}</p>
            </CardHeader>
            <CardContent className="space-y-6">
              {lesson.description && <p className="text-sm text-muted-foreground">{lesson.description}</p>}
              <article className="rounded-md border border-border bg-card p-4 leading-7 whitespace-pre-wrap">{lesson.content}</article>

              <div className="flex items-center gap-4">
                <Button onClick={markComplete}>Mark Complete</Button>
                {completion && (
                  <p className="text-sm text-success">Progress updated: {completion.progress_percentage}%</p>
                )}
              </div>
            </CardContent>
          </Card>
        )}
      </section>
    </AppShell>
  )
}
