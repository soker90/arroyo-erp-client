import axios from 'axios'
import { GET_PAYMENTS } from '../types'

/**
 * Request action
 * @returns {{type: string}}
 * @private
 */
const _getPaymentRequest = () => ({ type: GET_PAYMENTS.REQUEST })

/**
 * Success action
 * @returns {{type: string}}
 * @private
 */
const _getPaymentsSuccess = () => ({
  type: GET_PAYMENTS.SUCCESS
})

const _getPaymentsSet = payments => ({
  type: GET_PAYMENTS.SET,
  payload: {
    payments
  }
})

/**
 * Error action
 * @param error
 * @returns {{type: string, error: _getPaymentsError.props}}
 * @private
 */
const _getPaymentsError = error => ({
  type: GET_PAYMENTS.FAILURE,
  error
})

/**
 * Pide los pagos pendientes de cobro
 * @returns {function(...[*]=)}
 */
export const getPayments = () => async dispatch => {
  dispatch(_getPaymentRequest())

  try {
    const { data } = await axios('payments')

    dispatch(_getPaymentsSuccess())
    dispatch(_getPaymentsSet(data))
  } catch (error) {
    dispatch(_getPaymentsError(error))
  }
}
