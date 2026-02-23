import { Link } from 'react-router-dom'
import AppShell from '@/components/layout/AppShell'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/common/Card'
import { Button } from '@/components/common/Button'
import { useAuth } from '@/context/AuthContext'

export default function Profile() {
  const { user, hasRole } = useAuth()
  const roles = user?.roles ?? []
  const initials = (user?.name ?? 'User')
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
  const isStaff = hasRole(['admin', 'instructor'])

  return (
    <AppShell>
      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <Card className="border-primary/20 bg-gradient-to-br from-card to-card/70">
          <CardHeader className="space-y-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="grid h-16 w-16 place-items-center rounded-2xl bg-primary/15 text-xl font-bold text-primary">
                  {initials}
                </div>
                <div>
                  <CardTitle className="font-display text-3xl">{user?.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{user?.email}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {roles.map((role) => (
                  <span
                    key={role}
                    className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </CardHeader>
          <CardContent className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-border/80 bg-background/80 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Primary Workspace</p>
              <p className="mt-2 text-lg font-semibold">{isStaff ? 'Instructor Studio' : 'Learner Workspace'}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {isStaff ? 'Manage drafts, publish courses, and review content quality.' : 'Track enrolled courses and keep learning momentum.'}
              </p>
            </div>
            <div className="rounded-lg border border-border/80 bg-background/80 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Account Status</p>
              <p className="mt-2 text-lg font-semibold">Active</p>
              <p className="mt-1 text-sm text-muted-foreground">Your account is verified and ready for course activity.</p>
            </div>
            <div className="sm:col-span-2 flex flex-wrap gap-3 pt-1">
              <Link to="/courses">
                <Button variant="outline">Explore Courses</Button>
              </Link>
              <Link to={isStaff ? '/instructor/drafts' : '/my-courses'}>
                <Button>{isStaff ? 'Open Instructor Studio' : 'Go to My Courses'}</Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-xl">Profile Details</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 text-sm sm:grid-cols-2">
            <div className="rounded-md border border-border/70 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Full Name</p>
              <p className="mt-2 font-medium">{user?.name}</p>
            </div>
            <div className="rounded-md border border-border/70 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Email Address</p>
              <p className="mt-2 font-medium">{user?.email}</p>
            </div>
            <div className="sm:col-span-2 rounded-md border border-border/70 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Assigned Roles</p>
              <p className="mt-2 font-medium">{roles.join(', ')}</p>
            </div>
          </CardContent>
        </Card>
      </section>
    </AppShell>
  )
}
