import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AppShell from '@/components/layout/AppShell'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/common/Card'
import { Button } from '@/components/common/Button'
import { coursesApi } from '@/services/api'
import { extractMessage } from '@/lib/http'
import { CourseListItem } from '@/types'

export default function MyCourses() {
  const [items, setItems] = useState<CourseListItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    coursesApi
      .myCourses()
      .then((res) => setItems(res.data))
      .catch((err) => setError(extractMessage(err)))
      .finally(() => setLoading(false))
  }, [])

  return (
    <AppShell>
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight">My Courses</h1>
        <p className="mt-1 text-sm text-muted-foreground">Courses you are currently enrolled in.</p>

        {error && <p className="mt-4 rounded-md border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive">{error}</p>}
        {loading && <p className="mt-4 text-sm text-muted-foreground">Loading...</p>}

        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {items.map((course) => (
            <Card key={course.id}>
              <CardHeader>
                <CardTitle className="text-xl">{course.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">{course.category?.name ?? 'Uncategorized'}</p>
                <p className="text-sm text-muted-foreground">Instructor: {course.instructor?.name ?? 'N/A'}</p>
                <div className="flex gap-2">
                  <Link className="flex-1" to={`/courses/${course.id}-${course.slug}`}><Button className="w-full" variant="outline">Overview</Button></Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {!loading && items.length === 0 && (
          <Card className="mt-6"><CardContent className="p-6 text-sm text-muted-foreground">You are not enrolled in any course yet.</CardContent></Card>
        )}
      </section>
    </AppShell>
  )
}
