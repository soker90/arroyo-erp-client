import axios from 'axios'
import { UPDATE_DATA } from '../types'

/**
 * Request action
 * @returns {{type: string}}
 * @private
 */
const _updateDataInvoiceRequest = () => ({ type: UPDATE_DATA.REQUEST })

/**
 * Success action
 * @returns {{type: string}}
 * @private
 */
const _updateDataInvoiceSuccess = () => ({
  type: UPDATE_DATA.SUCCESS,
  payload: {
    level: 'success',
    message: 'La factura se ha actualizado correctamente'
  }
})

/**
 * Set action
 * @param {Object} data
 * @param {Object} totals
 * @param {Object} payment
 * @return {{payload: Object, type: string}}
 * @private
 */
const _updateDataInvoiceSet = ({
  data,
  totals,
  payment
}) => ({
  type: UPDATE_DATA.SET,
  payload: {
    ...(data && { data }),
    ...(totals && { totals }),
    ...(payment && { payment })
  }
})

/**
 * Error action
 * @param error
 * @returns {{type: string, error: _updateDataInvoiceError.props}}
 * @private
 */
const _updateDataInvoiceError = error => ({
  type: UPDATE_DATA.FAILURE,
  error
})

/**
 * Confirma la factura
 * @param {String} id
 * @param {{data: Object, totals: Object}} newData
 * @param {function} callback
 * @returns {function(...[*]=)}
 */
export const updateDataInvoice = (id, newData, callback) => async dispatch => {
  dispatch(_updateDataInvoiceRequest())

  try {
    const { data } = await axios.patch(`invoices/${id}`, newData)

    dispatch(_updateDataInvoiceSuccess())
    dispatch(_updateDataInvoiceSet(data))
    callback()
  } catch (error) {
    dispatch(_updateDataInvoiceError(error))
  }
}
