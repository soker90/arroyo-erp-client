import axios from 'axios'
import { GET_INVOICE } from '../types'

/**
 * Request action
 * @returns {{type: string}}
 * @private
 */
const _getInvoiceRequest = () => ({ type: GET_INVOICE.REQUEST })

/**
 * Success action
 * @returns {{type: string}}
 * @private
 */
const _getInvoiceSuccess = () => ({
  type: GET_INVOICE.SUCCESS
})

/**
 * Set action
 * @param {Object} data
 * @return {{payload: {provider: Object}, type: string}}
 * @private
 */
const _getInvoiceSet = data => ({
  type: GET_INVOICE.SET,
  payload: data
})

/**
 * Error action for getInitData
 * @param error
 * @returns {{type: string, error: _getProvidersError.props}}
 * @private
 */
const _getInvoiceError = error => ({
  type: GET_INVOICE.FAILURE,
  error
})

/**
 * Trae los proveedores
 * @returns {function(...[*]=)}
 */
export const getInvoice = id => async dispatch => {
  dispatch(_getInvoiceRequest())

  try {
    const { data } = await axios(`invoices/${id}`)

    dispatch(_getInvoiceSuccess())
    dispatch(_getInvoiceSet(data))
  } catch (error) {
    dispatch(_getInvoiceError(error))
  }
}
