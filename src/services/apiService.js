import axios from 'axios'
import { API_CLIENT_INVOICES, API_CLIENTS } from 'constants/paths'

export const createClient = (client) => {
  return axios.post(API_CLIENTS, client)
}
export const editClientApi = (clientId, data) => axios.put(`${API_CLIENTS}/${clientId}`, data).then(({ data }) => data)

/**
 * @param {string} clientId
 */
export const createClientInvoice = (clientId) => axios.post(API_CLIENT_INVOICES, { client: clientId }).then(({ data }) => data)

export const confirmClientPayment = (id, data) => {
  return axios.patch(`client/invoices/payments/${id}`, data)
}

export const confirmClientInvoice = (id) => axios.patch(`${API_CLIENT_INVOICES}/${id}/confirm`)
