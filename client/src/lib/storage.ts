const TOKEN_KEY = 'auth_token'
const USER_KEY = 'auth_user'

export const storage = {
  getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY)
  },
  setToken(token: string): void {
    localStorage.setItem(TOKEN_KEY, token)
  },
  clearToken(): void {
    localStorage.removeItem(TOKEN_KEY)
  },
  getUser<T>(): T | null {
    const raw = localStorage.getItem(USER_KEY)
    if (!raw) return null

    try {
      return JSON.parse(raw) as T
    } catch {
      return null
    }
  },
  setUser<T>(user: T): void {
    localStorage.setItem(USER_KEY, JSON.stringify(user))
  },
  clearUser(): void {
    localStorage.removeItem(USER_KEY)
  },
  clearAuth(): void {
    this.clearToken()
    this.clearUser()
  },
}
