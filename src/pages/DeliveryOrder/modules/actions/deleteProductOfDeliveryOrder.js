import axios from 'axios'
import { DELETE_PRODUCT_TO_DELIVERY_ORDER } from '../types'

/**
 * Request action for createDeliveryOrder
 * @returns {{type: string}}
 * @private
 */
const _deleteProductOfDeliveryOrderRequest = () => ({
  type: DELETE_PRODUCT_TO_DELIVERY_ORDER.REQUEST
})

/**
 * Success action for createDeliveryOrder
 * @returns {{payload: {level: string, message: string}, type: string}}
 * @private
 */
const _deleteProductOfDeliveryOrderSuccess = () => ({
  type: DELETE_PRODUCT_TO_DELIVERY_ORDER.SUCCESS,
  payload: {
    level: 'success',
    message: 'Se ha quitado el producto correctamente'
  }
})

/**
 * Set data
 * @param {array} deliveryOrders
 * @return {{payload: {deliveryOrders: array}, type: string}}
 * @private
 */
const _deleteProductOfDeliveryOrderSet = ({ data }) => ({
  type: DELETE_PRODUCT_TO_DELIVERY_ORDER.SET,
  payload: data
})

/**
 * Error action for createDeliveryOrder
 * @param error
 * @returns {{type: string, error: _createDeliveryOrderError.props}}
 * @private
 */
const _deleteProductOfDeliveryOrderError = error => ({
  type: DELETE_PRODUCT_TO_DELIVERY_ORDER.FAILURE,
  error
})

/**
 * Elimina un producto del albarán
 * @returns {function(...[*]=)}
 */
export const deleteProductOfDeliveryOrder = index => async (dispatch, getState) => {
  dispatch(_deleteProductOfDeliveryOrderRequest())
  const id = getState().deliveryOrders._id

  try {
    const response = await axios.delete(`deliveryorders/${id}/product/${index}`)

    dispatch(_deleteProductOfDeliveryOrderSuccess())
    dispatch(_deleteProductOfDeliveryOrderSet(response))
  } catch (error) {
    console.error(error)
    dispatch(_deleteProductOfDeliveryOrderError(error))
  }
}
