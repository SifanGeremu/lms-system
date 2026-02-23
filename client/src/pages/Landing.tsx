import { Link } from 'react-router-dom'
import AppShell from '@/components/layout/AppShell'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/common/Card'
import { Button } from '@/components/common/Button'
import { useAuth } from '@/context/AuthContext'
import { getPostLoginRoute } from '@/lib/roleRoute'

export default function Landing() {
  const { isAuthenticated, user } = useAuth()
  const workspaceRoute = getPostLoginRoute(user?.roles)

  return (
    <AppShell>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.2),transparent_52%),radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.24),transparent_50%)]" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="space-y-6">
              <p className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Modern Learning Platform
              </p>
              <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
                Ship better skills with structured, real-world learning paths.
              </h1>
              <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
                LearnHub helps students progress, instructors publish confidently, and admins keep quality high without bloated workflows.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                {isAuthenticated ? (
                  <>
                    <Link to={workspaceRoute}>
                      <Button size="lg">Go to Workspace</Button>
                    </Link>
                    <Link to="/courses">
                      <Button variant="outline" size="lg">Browse Catalog</Button>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to="/signup">
                      <Button size="lg">Start Learning</Button>
                    </Link>
                    <Link to="/courses">
                      <Button variant="outline" size="lg">Explore Courses</Button>
                    </Link>
                  </>
                )}
              </div>
            </div>

            <Card className="border-primary/20 bg-card/90 shadow-xl">
              <CardHeader>
                <CardTitle className="font-display text-3xl">Why Teams Choose LearnHub</CardTitle>
                <CardDescription>Focused tools for learning outcomes, not feature clutter.</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-3 text-sm">
                <div className="rounded-lg border border-border/70 bg-background/50 p-4">
                  <p className="font-semibold">Outcome-first course flow</p>
                  <p className="mt-1 text-muted-foreground">Every course page is built around clear progression from module to completion.</p>
                </div>
                <div className="rounded-lg border border-border/70 bg-background/50 p-4">
                  <p className="font-semibold">Instructor studio</p>
                  <p className="mt-1 text-muted-foreground">Draft, revise, and publish with a clean workflow designed for teams.</p>
                </div>
                <div className="rounded-lg border border-border/70 bg-background/50 p-4">
                  <p className="font-semibold">Role-aware experience</p>
                  <p className="mt-1 text-muted-foreground">Admin, instructor, and learner journeys are tailored from first login.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </AppShell>
  )
}
