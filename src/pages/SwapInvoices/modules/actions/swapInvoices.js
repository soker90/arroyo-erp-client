import axios from 'axios'
import { SWAP_INVOICES } from '../types'

/**
 * Request action
 * @returns {{type: string}}
 * @private
 */
const _swapInvoicesRequest = () => ({ type: SWAP_INVOICES.REQUEST })

/**
 * Success action
 * @returns {{type: string}}
 * @private
 */
const _swapInvoicesSuccess = () => ({
  type: SWAP_INVOICES.SUCCESS,
  payload: {
    level: 'success',
    message: 'Intercambiados Nº de orden'
  }
})

/**
 * Error action
 * @param error
 * @returns {{type: string, error: _swapInvoicesError.props}}
 * @private
 */
const _swapInvoicesError = error => ({
  type: SWAP_INVOICES.FAILURE,
  error
})

/**
 * Intercambia los números de orden de las facturas
 * @returns {function(...[*]=)}
 */
export const swapInvoices = (invoiceA, invoiceB) => async dispatch => {
  dispatch(_swapInvoicesRequest())

  try {
    await axios.patch(`invoices/swap/${invoiceA}/${invoiceB}`)

    dispatch(_swapInvoicesSuccess())
  } catch (error) {
    dispatch(_swapInvoicesError(error))
  }
}
