import { FormEvent, useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { coursesApi } from '@/services/api'
import { extractMessage } from '@/lib/http'
import { CourseListItem } from '@/types'
import AppShell from '@/components/layout/AppShell'
import { Button } from '@/components/common/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/common/Card'
import { Input } from '@/components/common/Input'

export default function Courses() {
  const [items, setItems] = useState<CourseListItem[]>([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setLoading(true)
    setError(null)

    coursesApi
      .list({ search: query || undefined, perPage: 12 })
      .then((res) => setItems(res.data))
      .catch((err) => setError(extractMessage(err)))
      .finally(() => setLoading(false))
  }, [query])

  const emptyMessage = useMemo(() => {
    if (query) return `No courses found for "${query}".`
    return 'No published courses are available right now.'
  }, [query])

  const onSearch = (e: FormEvent) => {
    e.preventDefault()
    setQuery(search.trim())
  }

  return (
    <AppShell>
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Explore Courses</h1>
            <p className="mt-1 text-sm text-muted-foreground">Browse published courses and start learning.</p>
          </div>
          <form onSubmit={onSearch} className="flex w-full max-w-xl gap-2">
            <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search by title or description" />
            <Button type="submit">Search</Button>
          </form>
        </div>

        {error && <p className="mb-5 rounded-md border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive">{error}</p>}

        {loading && <p className="text-sm text-muted-foreground">Loading courses...</p>}

        {!loading && items.length === 0 && (
          <Card>
            <CardContent className="p-6 text-sm text-muted-foreground">{emptyMessage}</CardContent>
          </Card>
        )}

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {items.map((course) => (
            <Card key={course.id} className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">{course.title}</CardTitle>
                <CardDescription className="line-clamp-2">{course.category?.name ?? 'Uncategorized'}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="line-clamp-3 text-sm text-muted-foreground">{course.instructor?.name ? `By ${course.instructor.name}` : 'Instructor TBA'}</p>
                <Link to={`/courses/${course.id}-${course.slug}`}><Button className="w-full">View Details</Button></Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </AppShell>
  )
}
