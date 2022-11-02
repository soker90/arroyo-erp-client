import axios from 'axios'
import { API_CLIENT_INVOICES, API_CLIENTS } from 'constants/paths'

export const createClient = (client) => {
  return axios.post(API_CLIENTS, client)
}

/**
 * @param {string} clientId
 */
export const createClientInvoice = (clientId) => axios.post(API_CLIENT_INVOICES, { client: clientId })

export const confirmClientPayment = (id, data) => {
  return axios.patch(`client/invoices/payments/${id}`, data)
}
