import axios from 'axios'
import { DELETE_INVOICE } from '../types'

/**
 * Request action
 * @returns {{type: string}}
 * @private
 */
const _deleteInvoiceRequest = () => ({ type: DELETE_INVOICE.REQUEST })

/**
 * Success action
 * @returns {{type: string}}
 * @private
 */
const _deleteInvoiceSuccess = () => ({
  type: DELETE_INVOICE.SUCCESS,
  payload: {
    level: 'success',
    message: 'Factura eliminada'
  }
})

/**
 * Error action
 * @param error
 * @returns {{type: string, error: _deleteInvoiceError.props}}
 * @private
 */
const _deleteInvoiceError = error => ({
  type: DELETE_INVOICE.FAILURE,
  error
})

/**
 * Elimina la factura
 * @param {string} id
 * @param {function} callback
 * @returns {function(...[*]=)}
 */
export const deleteInvoice = (id, callback) => async dispatch => {
  dispatch(_deleteInvoiceRequest())

  try {
    await axios.delete(`invoices/${id}`)

    dispatch(_deleteInvoiceSuccess())
    callback()
  } catch (error) {
    dispatch(_deleteInvoiceError(error))
  }
}
