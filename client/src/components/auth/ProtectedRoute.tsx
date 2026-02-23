import { Navigate } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext'
import { Role } from '@/types'

interface ProtectedRouteProps {
  children: React.ReactNode
  requiredRoles?: Role[]
}

export default function ProtectedRoute({ children, requiredRoles }: ProtectedRouteProps) {
  const { isAuthenticated, isLoading, hasRole } = useAuth()

  if (isLoading) {
    return (
      <div className="min-h-screen grid place-items-center bg-background">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-r-transparent" />
      </div>
    )
  }

  if (!isAuthenticated) return <Navigate to="/login" replace />
  if (requiredRoles && requiredRoles.length > 0 && !hasRole(requiredRoles)) {
    return <Navigate to="/" replace />
  }

  return <>{children}</>
}
