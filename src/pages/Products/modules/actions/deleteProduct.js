import axios from 'axios';
import { DELETE_PRODUCT } from '../types';

/**
 * Request action
 * @returns {{type: string}}
 * @private
 */
const _deleteProductRequest = () => ({ type: DELETE_PRODUCT.REQUEST });

/**
 * Success action
 * @returns {{type: string}}
 * @private
 */
const _deleteProductSuccess = () => ({
  type: DELETE_PRODUCT.SUCCESS,
  payload: {
    level: 'success',
    message: 'Producto eliminado',
  },
});

/**
 * Success action
 * @returns {{type: string}}
 * @private
 */
const _deleteProductSet = products => ({
  type: DELETE_PRODUCT.SET,
  payload: {
    products,
  },
});

/**
 * Error action
 * @param error
 * @returns {{type: string, error: _deleteProductError.props}}
 * @private
 */
const _deleteProductError = error => ({
  type: DELETE_PRODUCT.FAILURE,
  error,
});

/**
 * Elimina el producto
 * @param {String} id
 * @returns {function(...[*]=)}
 */
export const deleteProduct = id => async dispatch => {
  dispatch(_deleteProductRequest());

  try {
    const { data } = await axios.delete(`products/${id}`);

    dispatch(_deleteProductSuccess());
    dispatch(_deleteProductSet(data));
  } catch (error) {
    dispatch(_deleteProductError(error));
  }
};
