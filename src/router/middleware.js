import { AuthService } from '@/services/auth.service'

export async function checkAccessMiddleware(to, from, next) {
  const isAccessTokenExpired = AuthService.isAccessTokenExpired()
  const isAuthRoute = to.matched.some(item => item.meta.isAuth)

  if (!isAuthRoute) return next()
  if (isAccessTokenExpired && AuthService.hasRefreshToken()) {
    try {
      await AuthService.debounceRefreshToken()
      next()
    } catch (err) {
      return next({ name: 'Login' })
    }
  }
  if (isAccessTokenExpired) return next({ name: 'Login' })
  next()
}
