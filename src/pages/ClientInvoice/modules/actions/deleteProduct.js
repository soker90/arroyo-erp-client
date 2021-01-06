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
    message: 'Producto borradao',
  },
});

/**
 * Set action
 * @param {Object} data
 * @return {{payload: {data: Object}, type: string}}
 * @private
 */
const _deleteProductSet = data => ({
  type: DELETE_PRODUCT.SET,
  payload: data,
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
 * Elimina un producto del albarán
 * @param {Object} data
 * @returns {function(...[*]=)}
 */
export const deleteProduct = ({
  invoice,
  deliveryOrder,
  product,
}) => async dispatch => {
  dispatch(_deleteProductRequest());

  try {
    const { data } = await axios.delete(
      `client/invoices/${invoice}/deliveryOrder/${deliveryOrder}/product/${product}`,
    );

    dispatch(_deleteProductSuccess());
    dispatch(_deleteProductSet(data));
  } catch (error) {
    dispatch(_deleteProductError(error));
  }
};
