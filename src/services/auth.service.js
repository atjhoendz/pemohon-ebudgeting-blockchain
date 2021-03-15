/* eslint-disable no-useless-catch */
import axios from 'axios'
import { API_URL } from '../.env'
import $store from '../store'
import $router from '../router'
import { Http } from '../services/http.init'
import cookie from 'vue-cookies'

export class AuthService {
  static async makeLogin({ username, password }) {
    try {
      const response = await axios.post(
        `${API_URL}/auth/login`,
        { username, password },
        { withCredentials: true }
      )

      const role = parseTokenData(response.data.data.accessToken).role

      if (role != 'Admin') return 401

      _setAuthData({
        accessToken: response.data.data.accessToken,
        refreshToken: response.data.data.refreshToken,
        exp: parseTokenData(response.data.data.accessToken).exp,
      })

      return response.data
    } catch (err) {
      throw err
    }
  }

  static async makeLogout() {
    try {
      const response = await new Http({ auth: true }).post(
        'auth/logout',
        {},
        { withCredentials: true }
      )
      _resetAuthData()
      $router.push({ name: 'Login' }).catch(() => {})
      return response.data
    } catch (err) {
      throw err
    }
  }

  static async refreshToken() {
    try {
      const response = await axios.get(`${API_URL}/auth/refresh`, {
        headers: { Authorization: `Bearer ${$store.state.auth.refreshToken}` },
      })

      _setAuthData({
        accessToken: response.data.data.accessToken,
        refreshToken: null,
        exp: parseTokenData(response.data.data.accessToken).exp,
      })

      return response.data
    } catch (err) {
      _resetAuthData()
      $router.push({ name: 'Login' }).catch(() => {})
    }
  }

  static debounceRefreshToken = this._debounce(() => {
    return this.refreshToken()
  }, 100)

  static getBearer() {
    return `Bearer ${$store.state.auth.accessToken}`
  }

  static isAccessTokenExpired() {
    const accessTokenExpDate = $store.state.auth.accessTokenExpDate - 10
    const nowTime = Math.floor(new Date().getTime() / 1000)

    return accessTokenExpDate <= nowTime
  }

  static hasRefreshToken() {
    // return Boolean(localStorage.getItem('refreshToken'));
    return Boolean($store.state.auth.refreshToken)
  }

  static setRefreshToken(status) {
    if (!['', 'true'].includes(status))
      throw new Error(`setRefreshToken: invalid value ${status}`)

    localStorage.setItem('refreshToken', status)
  }

  static _debounce(inner, ms = 0) {
    let timer = null
    let resolves = []

    return function() {
      clearTimeout(timer)
      timer = setTimeout(() => {
        const result = inner()
        resolves.forEach(r => r(result))
        resolves = []
      }, ms)

      return new Promise(resolve => resolves.push(resolve))
    }
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
  $store.commit('auth/SET_ACCESS_TOKEN', null)
  $store.commit('auth/SET_REFRESH_TOKEN', null)

  AuthService.setRefreshToken('')
  cookie.keys().forEach(key => cookie.remove(key)) // delete
}

function _setAuthData({ accessToken, refreshToken = null, exp } = {}) {
  const payloadData = parseTokenData(accessToken)
  $store.commit('user/SET_CURRENT_USER', payloadData)

  $store.commit('auth/SET_ACCESS_TOKEN', accessToken)
  if (refreshToken) $store.commit('auth/SET_REFRESH_TOKEN', refreshToken)
  $store.commit('auth/SET_ATOKEN_EXP_DATE', exp)
  // AuthService.setRefreshToken('true');
}
