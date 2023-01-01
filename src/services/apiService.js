import axios from 'axios'
import {
  API_CLIENT_INVOICES,
  API_CLIENTS,
  API_CREATE_REMINDER,
  API_DELETE_REMINDER, API_NOTES, API_PROVIDERS
} from 'constants/paths'
import { format } from '../utils'

export const createClient = (client) => {
  return axios.post(API_CLIENTS, client)
}
export const editClientApi = (clientId, data) => axios.put(`${API_CLIENTS}/${clientId}`, data)
  .then(({ data }) => data)

/**
 * @param {string} clientId
 */
export const createClientInvoice = (clientId) => axios.post(API_CLIENT_INVOICES, { client: clientId })
  .then(({ data }) => data)

export const updateDataClientInvoiceApi = (id, data) => axios.patch(`${API_CLIENT_INVOICES}/${id}`, data)
  .then(({ data }) => data)

export const confirmClientPayment = (id, data) => {
  return axios.patch(`client/invoices/payments/${id}`, data)
}

export const deleteClientInvoiceApi = (id) => axios.delete(`client/invoices/${id}`)

export const confirmClientInvoice = (id) => axios.patch(`${API_CLIENT_INVOICES}/${id}/confirm`)
  .then(({ data }) => data)

export const deleteDOClientInvoice = (id, deliveryOrderId) => axios.delete(`${API_CLIENT_INVOICES}/${id}/deliveryOrder/${deliveryOrderId}`)

export const createDOClientInvoice = (id) => axios.post(`client/invoices/${id}/deliveryOrder`)
  .then(({ data }) => data)

export const updateDOClientInvoice = ({
  id,
  deliveryOrderId,
  date
}) => axios.patch(
  `${API_CLIENT_INVOICES}/${id}/deliveryOrder/${deliveryOrderId}`,
  { date: format.dateToSend(date) }
)

export const deleteProductClientInvoice = ({
  invoice,
  deliveryOrder,
  product
}) => axios.delete(
  `${API_CLIENT_INVOICES}/${invoice}/deliveryOrder/${deliveryOrder}/product/${product}`
)
  .then(({ data }) => data)

export const createProductClientInvoice = ({
  invoice,
  deliveryOrder,
  data
}) => axios.post(
  `${API_CLIENT_INVOICES}/${invoice}/deliveryOrder/${deliveryOrder}/product`,
  data
)
  .then(({ data }) => data)

export const updateProductClientInvoice = ({
  invoice,
  deliveryOrder,
  data,
  product
}) => axios.patch(
  `${API_CLIENT_INVOICES}/${invoice}/deliveryOrder/${deliveryOrder}/product/${product}`,
  data
)
  .then(({ data }) => data)

/* Dashboard */

export const deleteReminderApi = (id) => axios.delete(`${API_DELETE_REMINDER}/${id}`).then(({ data }) => data)
export const createReminderApi = (message) => axios.post(`${API_CREATE_REMINDER}`, { message }).then(({ data }) => data)

export const createProviderApi = (data) => axios.post(`${API_PROVIDERS}`, data).then(({ data }) => data)

export const createNoteApi = (data) => axios.post(API_NOTES, data).then(({ data }) => data)
export const editNoteApi = (id, data) => axios.put(`${API_NOTES}/${id}`, data).then(({ data }) => data)
export const deleteNoteApi = (id) => axios.delete(`${API_NOTES}/${id}`).then(({ data }) => data)
