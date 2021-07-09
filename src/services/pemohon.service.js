/* eslint-disable no-useless-catch */
import axiosService from './axios.service'
import { UserService } from './user.service'

export class PemohonService {
  static get entity() {
    return 'pemohon'
  }

  static async getAll() {
    try {
      const response = await axiosService.get(this.entity)

      return response.data.data
    } catch (err) {
      throw err
    }
  }

  static async getCountData(userKey) {
    try {
      const userData = await UserService.getUserByKey(userKey)

      const dataPemohon = await this.getAll()

      const filteredPemohon = dataPemohon.filter(
        item => item.Record.nama == userData.nama_lengkap
      )

      return filteredPemohon.length.toString()
    } catch (err) {
      throw err
    }
  }
}
