import axios from 'axios'
import { GET_BILLING } from '../types'

/**
 * Request action
 * @returns {{type: string}}
 * @private
 */
const _getInvoicesRequest = () => ({ type: GET_BILLING.REQUEST })

/**
 * Success action
 * @returns {{type: string}}
 * @private
 */
const _getInvoicesSuccess = () => ({
  type: GET_BILLING.SUCCESS
})

const _getInvoicesSet = billing => ({
  type: GET_BILLING.SET,
  payload: {
    billing
  }
})

/**
 * Error action
 * @param error
 * @returns {{type: string, error: _getProvidersError.props}}
 * @private
 */
const _getInvoicesError = error => ({
  type: GET_BILLING.FAILURE,
  error
})

/**
 * Trae la facturacion
 * @param {String} year
 * @returns {function(...[*]=)}
 */
export const getBilling = year => async dispatch => {
  dispatch(_getInvoicesRequest())

  try {
    const { data } = await axios(`billings?year=${year}`)

    dispatch(_getInvoicesSuccess())
    dispatch(_getInvoicesSet(data))
  } catch (error) {
    dispatch(_getInvoicesError(error))
  }
}
