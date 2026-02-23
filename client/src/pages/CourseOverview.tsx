import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import AppShell from '@/components/layout/AppShell'
import { Button } from '@/components/common/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/common/Card'
import { useAuth } from '@/context/AuthContext'
import { extractMessage } from '@/lib/http'
import { coursesApi, enrollmentApi } from '@/services/api'
import { CourseOverview as CourseOverviewType, EnrollmentStatus } from '@/types'

function parseCourseRef(courseRef: string): { id: number | null; slug: string } {
  const match = courseRef.match(/^(\d+)-(.+)$/)
  if (match) {
    return { id: Number(match[1]), slug: match[2] }
  }

  return { id: null, slug: courseRef }
}

export default function CourseOverview() {
  const { courseRef = '' } = useParams()
  const { isAuthenticated, hasRole } = useAuth()
  const [course, setCourse] = useState<CourseOverviewType | null>(null)
  const [enrollment, setEnrollment] = useState<EnrollmentStatus | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [enrolling, setEnrolling] = useState(false)

  const parsed = useMemo(() => parseCourseRef(courseRef), [courseRef])

  useEffect(() => {
    setLoading(true)
    setError(null)

    coursesApi
      .show(parsed.slug)
      .then(async (res) => {
        setCourse(res)

        if (isAuthenticated && parsed.id) {
          const status = await enrollmentApi.status(parsed.id).catch(() => null)
          if (status) setEnrollment(status)
        }
      })
      .catch((err) => setError(extractMessage(err)))
      .finally(() => setLoading(false))
  }, [isAuthenticated, parsed.id, parsed.slug])

  const handleEnroll = async () => {
    if (!parsed.id) {
      setError('Enrollment is unavailable because this route has no course id. Use the course list page.')
      return
    }

    setEnrolling(true)
    setError(null)
    try {
      await enrollmentApi.enroll(parsed.id)
      setEnrollment({ status: 'enrolled', progress_percentage: 0, completed_at: null })
    } catch (err) {
      setError(extractMessage(err))
    } finally {
      setEnrolling(false)
    }
  }

  return (
    <AppShell>
      <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        {loading && <p className="text-sm text-muted-foreground">Loading course...</p>}
        {error && <p className="mb-4 rounded-md border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive">{error}</p>}

        {course && (
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">{course.title}</CardTitle>
              <p className="text-sm text-muted-foreground">Instructor: {course.instructor?.name ?? 'N/A'}</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="leading-7 text-foreground/90">{course.description || 'No description provided yet.'}</p>

              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-border px-3 py-1 text-xs">{course.category?.name ?? 'Uncategorized'}</span>
                {enrollment?.status === 'enrolled' && (
                  <span className="rounded-full bg-success/15 px-3 py-1 text-xs font-medium text-success">Enrolled</span>
                )}
              </div>

              {isAuthenticated ? (
                enrollment?.status === 'enrolled' ? (
                  <Link to="/my-courses"><Button>Go to My Courses</Button></Link>
                ) : (
                  <Button onClick={handleEnroll} isLoading={enrolling} disabled={enrolling}>Enroll Now</Button>
                )
              ) : (
                <Link to="/login"><Button>Login to Enroll</Button></Link>
              )}

              {isAuthenticated && hasRole(['instructor', 'admin']) && (
                <p className="text-xs text-muted-foreground">Tip: open your draft list to edit modules and lessons.</p>
              )}
            </CardContent>
          </Card>
        )}
      </section>
    </AppShell>
  )
}
