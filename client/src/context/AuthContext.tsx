import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { authApi } from '@/services/api'
import { storage } from '@/lib/storage'
import { Role, User } from '@/types'

interface AuthContextType {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<void>
  signup: (name: string, email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  hasRole: (roles: Role[]) => boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(storage.getUser<User>())
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const token = storage.getToken()
    if (!token) {
      setIsLoading(false)
      return
    }

    authApi
      .me()
      .then((freshUser) => {
        setUser((prev) => ({ ...freshUser, roles: prev?.roles?.length ? prev.roles : freshUser.roles }))
        storage.setUser(freshUser)
      })
      .catch(() => {
        storage.clearAuth()
        setUser(null)
      })
      .finally(() => setIsLoading(false))
  }, [])

  const login = useCallback(async (email: string, password: string) => {
    const { token, user: authUser } = await authApi.login(email, password)
    storage.setToken(token)
    storage.setUser(authUser)
    setUser(authUser)
  }, [])

  const signup = useCallback(async (name: string, email: string, password: string) => {
    const { token, user: authUser } = await authApi.register(name, email, password)
    storage.setToken(token)
    storage.setUser(authUser)
    setUser(authUser)
  }, [])

  const logout = useCallback(async () => {
    try {
      await authApi.logout()
    } finally {
      storage.clearAuth()
      setUser(null)
    }
  }, [])

  const hasRole = useCallback(
    (roles: Role[]) => {
      if (!user) return false
      return roles.some((role) => user.roles.includes(role))
    },
    [user]
  )

  const value = useMemo<AuthContextType>(
    () => ({
      user,
      isLoading,
      isAuthenticated: Boolean(user),
      login,
      signup,
      logout,
      hasRole,
    }),
    [user, isLoading, login, signup, logout, hasRole]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within AuthProvider')
  return context
}
