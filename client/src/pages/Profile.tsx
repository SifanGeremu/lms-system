import AppShell from '@/components/layout/AppShell'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/common/Card'
import { useAuth } from '@/context/AuthContext'

export default function Profile() {
  const { user } = useAuth()

  return (
    <AppShell>
      <section className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        <Card>
          <CardHeader>
            <CardTitle>Profile</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <p><span className="text-muted-foreground">Name:</span> {user?.name}</p>
            <p><span className="text-muted-foreground">Email:</span> {user?.email}</p>
            <p><span className="text-muted-foreground">Roles:</span> {user?.roles.join(', ')}</p>
          </CardContent>
        </Card>
      </section>
    </AppShell>
  )
}
