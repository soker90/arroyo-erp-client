import axios from 'axios'
import { GET_DELIVERY_ORDER } from '../types'

/**
 * Request action
 * @returns {{type: string}}
 * @private
 */
const _getDeliveryOrderRequest = () => ({ type: GET_DELIVERY_ORDER.REQUEST })

/**
 * Success action
 * @returns {{type: string}}
 * @private
 */
const _getDeliveryOrderSuccess = () => ({
  type: GET_DELIVERY_ORDER.SUCCESS
})

/**
 * Set action
 * @param {Object} data
 * @return {{payload: {provider: Object}, type: string}}
 * @private
 */
const _getDeliveryOrderSet = data => ({
  type: GET_DELIVERY_ORDER.SET,
  payload: data
})

/**
 * Error action for getInitData
 * @param error
 * @returns {{type: string, error: _getProvidersError.props}}
 * @private
 */
const _getDeliveryOrderError = error => ({
  type: GET_DELIVERY_ORDER.FAILURE,
  error
})

/**
 * Trae los proveedores
 * @returns {function(...[*]=)}
 */
export const getDeliveryOrder = id => async dispatch => {
  dispatch(_getDeliveryOrderRequest())

  try {
    const { data } = await axios(`deliveryorders/${id}`)

    dispatch(_getDeliveryOrderSuccess())
    dispatch(_getDeliveryOrderSet(data))
  } catch (error) {
    dispatch(_getDeliveryOrderError(error))
  }
}
