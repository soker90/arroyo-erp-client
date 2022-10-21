import axios from 'axios'
import { CONFIRM_PAYMENT } from '../types'

/**
 * Request action
 * @returns {{type: string}}
 * @private
 */
const _confirmPaymentRequest = () => ({ type: CONFIRM_PAYMENT.REQUEST })

/**
 * Success action
 * @returns {{type: string}}
 * @private
 */
const _confirmPaymentSuccess = () => ({
  type: CONFIRM_PAYMENT.SUCCESS,
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
const _confirmPaymentSet = ({ data }) => ({
  type: CONFIRM_PAYMENT.SET,
  payload: {
    payments: data
  }
})

/**
 * Error action
 * @param error
 * @returns {{type: string, error: _confirmPaymentError.props}}
 * @private
 */
const _confirmPaymentError = error => ({
  type: CONFIRM_PAYMENT.FAILURE,
  error
})

/**
 * Confirma la aplicación del pago
 * @param {String} id
 * @param {Object} data
 * @param {function} callback
 */
export const confirmPayment = (id, data, callback) => async dispatch => {
  dispatch(_confirmPaymentRequest())

  try {
    const response = await axios.patch(`payments/${id}/confirm`, data)

    dispatch(_confirmPaymentSuccess())
    dispatch(_confirmPaymentSet(response))
    callback()
  } catch (error) {
    dispatch(_confirmPaymentError(error))
  }
}
