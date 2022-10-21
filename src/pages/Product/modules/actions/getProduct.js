import axios from 'axios'
import { GET_PRODUCT } from '../types'

/**
 * Request action
 * @returns {{type: string}}
 * @private
 */
const _getProductRequest = () => ({ type: GET_PRODUCT.REQUEST })

/**
 * Success action
 * @returns {{type: string}}
 * @private
 */
const _getProductSuccess = () => ({
  type: GET_PRODUCT.SUCCESS
})

/**
 * Set action
 * @param {Object} data
 * @return {{payload: {product: Object, prices: []}, type: string}}
 * @private
 */
const _getProductSet = data => ({
  type: GET_PRODUCT.SET,
  payload: data
})

/**
 * Error action for getProduct
 * @param error
 * @returns {{type: string, error: _getProductError.props}}
 * @private
 */
const _getProductError = error => ({
  type: GET_PRODUCT.FAILURE,
  error
})

/**
 * Trae los proveedores
 * @returns {function(...[*]=)}
 */
export const getProduct = id => async dispatch => {
  dispatch(_getProductRequest())

  try {
    const { data } = await axios(`products/${id}`)

    dispatch(_getProductSuccess())
    dispatch(_getProductSet(data))
  } catch (error) {
    dispatch(_getProductError(error))
  }
}
