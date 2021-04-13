/* eslint-disable no-useless-catch */
import axiosService from './axios.service'

export class AnggaranService {
  static get entity() {
    return 'anggaran'
  }

  static async getAll() {
    try {
      const response = await axiosService.get(this.entity)

      return response.data.data
    } catch (err) {
      throw err
    }
  }

  static async getCountData() {
    try {
      const data = await this.getAll()

      return data.length.toString()
    } catch (err) {
      throw err
    }
  }
}
