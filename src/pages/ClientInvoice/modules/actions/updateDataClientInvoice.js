import axios from 'axios'
import { UPDATE_DATA } from '../types'

/**
 * Request action
 * @returns {{type: string}}
 * @private
 */
const _updateDataClientInvoiceRequest = () => ({ type: UPDATE_DATA.REQUEST })

/**
 * Success action
 * @returns {{type: string}}
 * @private
 */
const _updateDataClientInvoiceSuccess = () => ({
  type: UPDATE_DATA.SUCCESS,
  payload: {
    level: 'success',
    message: 'La factura se ha actualizado correctamente'
  }
})

/**
 * Set action
 * @param {number} date
 * @param {Object} totals
 * @return {{payload: Object, type: string}}
 * @private
 */
const _updateDataClientInvoiceSet = ({ date, totals }) => ({
  type: UPDATE_DATA.SET,
  payload: {
    ...(date && { date }),
    ...(totals && { totals })
  }
})

/**
 * Error action
 * @param error
 * @returns {{type: string, error: _updateDataClientInvoiceError.props}}
 * @private
 */
const _updateDataClientInvoiceError = error => ({
  type: UPDATE_DATA.FAILURE,
  error
})

/**
 * Actualiza los datos de la factura de cliente
 * @param {String} id
 * @param {{date: number, totals: Object}} newData
 * @param {function} callback
 * @returns {function(...[*]=)}
 */
export const updateDataClientInvoice = (id, newData, callback) => async dispatch => {
  dispatch(_updateDataClientInvoiceRequest())

  try {
    const { data } = await axios.patch(`client/invoices/${id}`, newData)

    dispatch(_updateDataClientInvoiceSuccess())
    dispatch(_updateDataClientInvoiceSet(data))
    callback?.()
  } catch (error) {
    dispatch(_updateDataClientInvoiceError(error))
  }
}
