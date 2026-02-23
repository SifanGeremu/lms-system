import { Link } from 'react-router-dom'
import AppShell from '@/components/layout/AppShell'
import { Button } from '@/components/common/Button'

export default function NotFound() {
  return (
    <AppShell>
      <section className="grid min-h-[60vh] place-items-center px-4 text-center">
        <div>
          <h1 className="text-4xl font-bold">Page not found</h1>
          <p className="mt-3 text-sm text-muted-foreground">The route you requested does not exist.</p>
          <Link to="/courses" className="mt-6 inline-block"><Button>Back to Courses</Button></Link>
        </div>
      </section>
    </AppShell>
  )
}
