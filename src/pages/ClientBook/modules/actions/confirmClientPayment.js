import axios from 'axios'
import { CONFIRM_CLIENT_PAYMENT } from '../types'

/**
 * Request action
 * @returns {{type: string}}
 * @private
 */
const _confirmClientPaymentRequest = () => ({ type: CONFIRM_CLIENT_PAYMENT.REQUEST })

/**
 * Success action
 * @returns {{type: string}}
 * @private
 */
const _confirmClientPaymentSuccess = () => ({
  type: CONFIRM_CLIENT_PAYMENT.SUCCESS,
  payload: {
    level: 'success',
    message: 'Pago aplicado'
  }
})

/**
 * Set action
 * @returns {{type: string}}
 * @private
 */
const _confirmClientPaymentSet = ({ data }) => ({
  type: CONFIRM_CLIENT_PAYMENT.SET,
  payload: {
    invoices: data
  }
})

/**
 * Error action
 * @param error
 * @returns {{type: string, error: _confirmClientPaymentError.props}}
 * @private
 */
const _confirmClientPaymentError = error => ({
  type: CONFIRM_CLIENT_PAYMENT.FAILURE,
  error
})

/**
 * Confirma la aplicación del pago
 * @param {String} id
 * @param {Object} data
 * @param {function} callback
 */
export const confirmClientPayment = (id, data, callback) => async dispatch => {
  dispatch(_confirmClientPaymentRequest())

  try {
    const response = await axios.patch(`client/invoices/payments/${id}`, data)

    dispatch(_confirmClientPaymentSuccess())
    dispatch(_confirmClientPaymentSet(response))
    callback()
  } catch (error) {
    dispatch(_confirmClientPaymentError(error))
  }
}
