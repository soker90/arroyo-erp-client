import axios from 'axios'

export const createClient = (client) => {
  return axios.post('clients', client).then(data => ({ data })).catch(((error) => ({ error })))
}