import { http, unwrap } from '@/lib/http'
import { AuthResponse, User } from '@/types'

interface AuthApiUser {
  id: number
  name: string
  email: string
  roles?: string[]
}

function normalizeUser(raw: AuthApiUser): User {
  return {
    id: raw.id,
    name: raw.name,
    email: raw.email,
    roles: (raw.roles ?? ['student']) as User['roles'],
  }
}

export const authApi = {
  async login(email: string, password: string): Promise<AuthResponse> {
    const res = await http.post('/login', { email, password })
    const data = unwrap<{ token: string; user: AuthApiUser }>(res.data)

    return {
      token: data.token,
      user: normalizeUser(data.user),
    }
  },

  async register(name: string, email: string, password: string): Promise<AuthResponse> {
    const res = await http.post('/register', {
      name,
      email,
      password,
      password_confirmation: password,
    })
    const data = unwrap<{ token: string; user: AuthApiUser }>(res.data)

    return {
      token: data.token,
      user: normalizeUser(data.user),
    }
  },

  async logout(): Promise<void> {
    await http.post('/logout')
  },

  async me(): Promise<User> {
    const res = await http.get('/user')
    const data = unwrap<AuthApiUser>(res.data)
    return normalizeUser(data)
  },
}
