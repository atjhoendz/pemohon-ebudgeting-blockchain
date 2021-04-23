/* eslint-disable no-useless-catch */
import $store from '../store'
import $router from '../router'
import axiosService from './axios.service'

export class AuthService {
  static async makeLogin({ username, password }) {
    try {
      const response = await axiosService.post('auth/login', {
        username,
        password,
      })

      const role = parseTokenData(response.data.data.accessToken).role

      if (role != 'Pemohon') return 401

      _setAuthData({
        accessToken: response.data.data.accessToken,
      })

      return response.data
    } catch (err) {
      throw err
    }
  }

  static async makeLogout() {
    try {
      const response = await axiosService.post('auth/logout', {})

      _resetAuthData()
      $router.push({ name: 'Login' }).catch(() => {})
      return response.data
    } catch (err) {
      throw err
    }
  }

  static async refreshToken() {
    try {
      const response = await axiosService.get('auth/refresh')

      _setAuthData({
        accessToken: response.data.data.accessToken,
      })

      return response.data
    } catch (err) {
      _resetAuthData()
      $router.push({ name: 'Login' }).catch(() => {})
    }
  }

  static isAccessTokenExpired() {
    const accessTokenExpDate = $store.state.user.currentUser.exp - 30
    const nowTime = Math.floor(new Date().getTime() / 1000)

    return accessTokenExpDate <= nowTime
  }

  static isCurrentUserExist() {
    const currentUser = localStorage.getItem('currentUser')
    return !!currentUser
  }

  static hasRefreshToken() {
    return Boolean(localStorage.getItem('refreshToken'))
  }

  static setRefreshToken(status) {
    if (!['', 'true'].includes(status))
      throw new Error(`setRefreshToken: invalid value ${status}`)

    localStorage.setItem('refreshToken', status)
  }
}

export function parseTokenData(accessToken) {
  let payload = ''
  let tokenData = {}

  try {
    payload = accessToken.split('.')[1]
    tokenData = JSON.parse(atob(payload))
  } catch (error) {
    throw new Error(error)
  }

  return tokenData
}

function _resetAuthData() {
  $store.commit('user/RESET')
  localStorage.removeItem('refreshToken')
}

function _setAuthData({ accessToken } = {}) {
  const payloadData = parseTokenData(accessToken)
  $store.commit('user/SET_CURRENT_USER', payloadData)
  AuthService.setRefreshToken('true')
}
