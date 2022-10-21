import axios from 'axios'
import { objectToParams } from 'utils'

import { GET_DELIVERY_ORDERS } from '../types'

/**
 * Request action
 * @returns {{type: string}}
 * @private
 */
const _getDeliveryOrdersRequest = () => ({ type: GET_DELIVERY_ORDERS.REQUEST })

/**
 * Success action
 * @returns {{type: string}}
 * @private
 */
const _getDeliveryOrdersSuccess = () => ({
  type: GET_DELIVERY_ORDERS.SUCCESS
})

/**
 * Set delivery orders
 * @param {array} deliveryOrders
 * @return {{payload: {deliveryOrders: array}, type: string}}
 * @private
 */
const _getDeliveryOrdersSet = ({ free, inInvoices }) => ({
  type: GET_DELIVERY_ORDERS.SET,
  payload: {
    deliveryOrdersFree: free,
    deliveryOrdersInInvoices: inInvoices
  }
})

/**
 * Error action
 * @param error
 * @returns {{type: string, error: _getDeliveryOrdersError.props}}
 * @private
 */
const _getDeliveryOrdersError = error => ({
  type: GET_DELIVERY_ORDERS.FAILURE,
  error
})

/**
 * Trae los albaranes
 * @param {Object} filter
 * @returns {function(...[*]=)}
 */
export const getDeliveryOrders = filter => async dispatch => {
  dispatch(_getDeliveryOrdersRequest())

  try {
    const { data } = await axios(`deliveryorders${objectToParams(filter)}`)

    dispatch(_getDeliveryOrdersSuccess())
    dispatch(_getDeliveryOrdersSet(data))
  } catch (error) {
    dispatch(_getDeliveryOrdersError(error))
  }
}
