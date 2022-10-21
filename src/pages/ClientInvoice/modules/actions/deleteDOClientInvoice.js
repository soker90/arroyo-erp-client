import axios from 'axios'
import { DELETE_DELIVERY_ORDER } from '../types'

/**
 * Request action
 * @returns {{type: string}}
 * @private
 */
const _deleteDOClientInvoiceRequest = () => ({ type: DELETE_DELIVERY_ORDER.REQUEST })

/**
 * Success action
 * @returns {{type: string}}
 * @private
 */
const _deleteDOClientInvoiceSuccess = () => ({
  type: DELETE_DELIVERY_ORDER.SUCCESS,
  payload: {
    level: 'success',
    message: 'Albarán eliminado'
  }
})

/**
 * Set action
 * @param {string} id
 * @return {{payload: Object, type: string}}
 * @private
 */
const _deleteDOClientInvoiceSet = id => ({
  type: DELETE_DELIVERY_ORDER.SET,
  payload: {
    id
  }
})

/**
 * Error action
 * @param error
 * @returns {{type: string, error: _deleteDOClientInvoiceError.props}}
 * @private
 */
const _deleteDOClientInvoiceError = error => ({
  type: DELETE_DELIVERY_ORDER.FAILURE,
  error
})

/**
 * Borra un albarán de la factura
 * @param {String} id
 * @param {String} deliveryOrderId
 * @param {Date} date
 * @returns {function(...[*]=)}
 */
export const deleteDOClientInvoice = (
  id,
  deliveryOrderId
) => async dispatch => {
  dispatch(_deleteDOClientInvoiceRequest())

  try {
    await axios.delete(
      `client/invoices/${id}/deliveryOrder/${deliveryOrderId}`
    )

    dispatch(_deleteDOClientInvoiceSuccess())
    dispatch(_deleteDOClientInvoiceSet(deliveryOrderId))
  } catch (error) {
    dispatch(_deleteDOClientInvoiceError(error))
  }
}
