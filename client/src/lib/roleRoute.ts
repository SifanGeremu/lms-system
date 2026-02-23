import { Role } from '@/types'

export function getPostLoginRoute(roles: Role[] | undefined | null): string {
  if (!roles || roles.length === 0) return '/my-courses'
  if (roles.includes('admin') || roles.includes('instructor')) return '/instructor/drafts'
  return '/my-courses'
}
