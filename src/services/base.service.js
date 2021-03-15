import { Http } from './http.init'

export class BaseService {
  static get entity() {
    throw new Error('entity getter not defined')
  }

  static request(status = { auth: false }) {
    return new Http(status)
  }
}
