import axios from 'axios'
import { UPDATE_PRODUCT } from '../types'

/**
 * Request action
 * @returns {{type: string}}
 * @private
 */
const _updateProductRequest = () => ({ type: UPDATE_PRODUCT.REQUEST })

/**
 * Success action
 * @returns {{type: string}}
 * @private
 */
const _updateProductSuccess = () => ({
  type: UPDATE_PRODUCT.SUCCESS,
  payload: {
    level: 'success',
    message: 'Producto actualizado'
  }
})

/**
 * Set action
 * @param {Object} data
 * @return {{payload: {data: Object}, type: string}}
 * @private
 */
const _updateProductSet = data => ({
  type: UPDATE_PRODUCT.SET,
  payload: data
})
/**
 * Error action
 * @param error
 * @returns {{type: string, error: _updateProductError.props}}
 * @private
 */
const _updateProductError = error => ({
  type: UPDATE_PRODUCT.FAILURE,
  error
})

/**
 * Actualiza un producto del albarán
 * @param {string} invoice
 * @param {string} deliveryOrder
 * @param {Object} model
 * @param {string} product
 * @param {function} callback
 * @returns {function(...[*]=)}
 */
export const updateProduct = ({
  invoice,
  deliveryOrder,
  model,
  product
}, callback) => async dispatch => {
  dispatch(_updateProductRequest())

  try {
    const { data } = await axios.patch(
      `client/invoices/${invoice}/deliveryOrder/${deliveryOrder}/product/${product}`,
      model
    )

    dispatch(_updateProductSuccess())
    dispatch(_updateProductSet(data))
    callback()
  } catch (error) {
    dispatch(_updateProductError(error))
  }
}
