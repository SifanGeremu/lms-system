import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AppShell from '@/components/layout/AppShell'
import { Button } from '@/components/common/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/common/Card'
import { coursesApi } from '@/services/api'
import { CourseEdit } from '@/types'
import { extractMessage } from '@/lib/http'

export default function InstructorDrafts() {
  const [drafts, setDrafts] = useState<CourseEdit[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    coursesApi
      .myDrafts()
      .then(setDrafts)
      .catch((err) => setError(extractMessage(err)))
  }, [])

  return (
    <AppShell>
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Instructor Workspace</h1>
            <p className="mt-1 text-sm text-muted-foreground">Manage your draft courses and structure content.</p>
          </div>
          <Link to="/instructor/courses/new"><Button>Create Course</Button></Link>
        </div>

        {error && <p className="mb-5 rounded-md border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive">{error}</p>}

        {drafts.length === 0 ? (
          <Card><CardContent className="p-6 text-sm text-muted-foreground">No draft courses yet.</CardContent></Card>
        ) : (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {drafts.map((course) => (
              <Card key={course.id}>
                <CardHeader>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="line-clamp-2 text-sm text-muted-foreground">{course.description || 'No description yet.'}</p>
                  <div className="flex gap-2">
                    <Link to={`/instructor/courses/${course.id}/edit`} className="flex-1"><Button className="w-full" variant="outline">Edit</Button></Link>
                    <Link to={`/courses/${course.id}-${course.slug}`} className="flex-1"><Button className="w-full">Preview</Button></Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>
    </AppShell>
  )
}
