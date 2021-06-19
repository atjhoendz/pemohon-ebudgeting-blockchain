import axiosService from './axios.service'

export class UserService {
  static get entity() {
    return 'user'
  }

  static async getUserByKey(key) {
    const response = await axiosService.get(`${this.entity}/${key}`)
    return response.data.data
  }
}
