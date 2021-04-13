import axios from 'axios'
import { API_URL } from '../.env'

const instance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  timeout: 10000,
})

export default instance
