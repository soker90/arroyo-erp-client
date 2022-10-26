import axios from 'axios'
import { API_CLIENTS } from 'constants/paths'

export const createClient = (client) => {
  return axios.post(API_CLIENTS, client)
}
