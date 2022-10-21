import axios from 'axios'
import { format } from 'utils'
import { UPDATE_DELIVERY_ORDER } from '../types'

/**
 * Request action
 * @returns {{type: string}}
 * @private
 */
const _updateDOClientInvoiceRequest = () => ({ type: UPDATE_DELIVERY_ORDER.REQUEST })

/**
 * Success action
 * @returns {{type: string}}
 * @private
 */
const _updateDOClientInvoiceSuccess = () => ({
  type: UPDATE_DELIVERY_ORDER.SUCCESS,
  payload: {
    level: 'success',
    message: 'Fecha del albarán actualizada'
  }
})

/**
 * Error action
 * @param error
 * @returns {{type: string, error: _updateDOClientInvoiceError.props}}
 * @private
 */
const _updateDOClientInvoiceError = error => ({
  type: UPDATE_DELIVERY_ORDER.FAILURE,
  error
})

/**
 * Actualiza los datos de la factura de cliente
 * @param {String} id
 * @param {String} deliveryOrderId
 * @param {Date} date
 * @returns {function(...[*]=)}
 */
export const updateDOClientInvoice = ({
  id,
  deliveryOrderId,
  date
}) => async dispatch => {
  dispatch(_updateDOClientInvoiceRequest())

  try {
    await axios.patch(
      `client/invoices/${id}/deliveryOrder/${deliveryOrderId}`,
      { date: format.dateToSend(date) }
    )

    dispatch(_updateDOClientInvoiceSuccess())
  } catch (error) {
    dispatch(_updateDOClientInvoiceError(error))
  }
}
