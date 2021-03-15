import axios from 'axios'
import { API_URL } from '../.env'
import { AuthService } from './auth.service'

export class Http {
  constructor(status) {
    this.isAuth = status && status.auth ? status.auth : false
    this.instance = axios.create({
      baseURL: API_URL,
    })

    return this.init()
  }

  init() {
    if (this.isAuth) {
      this.instance.interceptors.request.use(
        request => {
          request.headers.Authorization = AuthService.getBearer()

          if (
            AuthService.isAccessTokenExpired() &&
            AuthService.hasRefreshToken()
          ) {
            return AuthService.debounceRefreshToken()
              .then(() => {
                request.headers.Authorization = AuthService.getBearer()

                return request
              })
              .catch(error => Promise.reject(error))
          } else {
            return request
          }
        },
        error => {
          return Promise.reject(error)
        }
      )
    }

    return this.instance
  }
}
