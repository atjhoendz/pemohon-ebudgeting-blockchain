import { AuthService } from '../services/auth.service'

export async function checkAccessMiddleware(to, from, next) {
  const isAccessTokenExpired = AuthService.isAccessTokenExpired()
  const isAuthRoute = to.matched.some(item => item.meta.isAuth)

  if (!isAuthRoute) return next()
  if (isAccessTokenExpired) {
    if (!AuthService.hasRefreshToken()) return next({ name: 'Login' })
    try {
      await AuthService.refreshToken()
      return next()
    } catch (err) {
      return next({ name: 'Login' })
    }
  }
  return next()
}
