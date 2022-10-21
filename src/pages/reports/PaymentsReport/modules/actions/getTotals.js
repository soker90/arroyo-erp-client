import axios from 'axios'
import { TALON_PAYMENT } from 'constants/invoices'
import { GET_TOTALS } from '../types'

/**
 * Request action
 * @returns {{type: string}}
 * @private
 */
const _getTotalsRequest = () => ({ type: GET_TOTALS.REQUEST })

/**
 * Success action
 * @returns {{type: string}}
 * @private
 */
const _getTotalsSuccess = () => ({
  type: GET_TOTALS.SUCCESS
})

const _getTotalsSet = totals => ({
  type: GET_TOTALS.SET,
  payload: { totals }
})

/**
 * Error action
 * @param error
 * @returns {{type: string, error: _getTotalsError.props}}
 * @private
 */
const _getTotalsError = error => ({
  type: GET_TOTALS.FAILURE,
  error
})

/**
 * Pide los pagos pendientes de cobro
 * @param {string} year
 * @returns {function(...[*]=)}
 */
export const getTotals = year => async dispatch => {
  dispatch(_getTotalsRequest())

  try {
    const { data } = await axios(`invoices/totals?year=${year}&type=${TALON_PAYMENT}`)

    dispatch(_getTotalsSuccess())
    dispatch(_getTotalsSet(data))
  } catch (error) {
    dispatch(_getTotalsError(error))
  }
}
