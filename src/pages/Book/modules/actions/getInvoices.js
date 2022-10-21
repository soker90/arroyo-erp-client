import axios from 'axios'
import { objectToParams } from 'utils'
import { GET_INVOICES } from '../types'

/**
 * Request action
 * @returns {{type: string}}
 * @private
 */
const _getInvoicesRequest = () => ({ type: GET_INVOICES.REQUEST })

/**
 * Success action
 * @returns {{type: string}}
 * @private
 */
const _getInvoicesSuccess = () => ({
  type: GET_INVOICES.SUCCESS
})

const _getInvoicesSet = ({ invoices, count }) => ({
  type: GET_INVOICES.SET,
  payload: {
    invoices,
    count
  }
})

/**
 * Error action
 * @param error
 * @returns {{type: string, error: _getInvoicesError.props}}
 * @private
 */
const _getInvoicesError = error => ({
  type: GET_INVOICES.FAILURE,
  error
})

/**
 * Trae las facturas
 * @param {String} year
 * @param {Object} params
 * @returns {function(...[*]=)}
 */
export const getInvoices = (year, params) => async dispatch => {
  dispatch(_getInvoicesRequest())
  try {
    const { data } = await axios(`invoices?year=${year}${objectToParams(params, false)}`)

    dispatch(_getInvoicesSuccess())
    dispatch(_getInvoicesSet(data))
  } catch (error) {
    dispatch(_getInvoicesError(error))
  }
}
