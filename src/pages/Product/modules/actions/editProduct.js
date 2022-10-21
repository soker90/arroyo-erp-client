import axios from 'axios'
import { EDIT_PRODUCT } from '../types'

/**
 * Request action
 * @returns {{type: string}}
 * @private
 */
const _editProductRequest = () => ({ type: EDIT_PRODUCT.REQUEST })

/**
 * Success action
 * @returns {{type: string}}
 * @private
 */
const _editProductSuccess = product => ({
  type: EDIT_PRODUCT.SUCCESS,
  payload: {
    level: 'success',
    message: `${product} actualizado`
  }
})

/**
 * Set action
 * @param {Object} product
 * @return {{payload: {product: Object}, type: string}}
 * @private
 */
const _editProductSet = product => ({
  type: EDIT_PRODUCT.SET,
  payload: {
    product
  }
})

/**
 * Error action
 * @param error
 * @returns {{type: string, error: _editProductError.props}}
 * @private
 */
const _editProductError = error => ({
  type: EDIT_PRODUCT.FAILURE,
  error
})

/**
 * Confirma la factura
 * @param {String} id
 * @param {Object} newData
 * @param {function} callback
 * @returns {function(...[*]=)}
 */
export const editProduct = (id, newData, callback) => async dispatch => {
  dispatch(_editProductRequest())

  try {
    const { data } = await axios.put(`products/${id}`, newData)

    dispatch(_editProductSuccess(newData.name))
    dispatch(_editProductSet(data))
    callback()
  } catch (error) {
    dispatch(_editProductError(error))
  }
}
