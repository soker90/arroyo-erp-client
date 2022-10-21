import axios from 'axios'
import { ARROYO_TOKEN } from 'config'

const { VITE_API_HOST } = import.meta.env

// ========================================================
// Axios config
// ========================================================
axios.defaults.baseURL = VITE_API_HOST
axios.interceptors.response.use(
  response => {
    const { token } = response.headers
    window.localStorage.setItem(ARROYO_TOKEN, token)
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
    return response
  }
)
