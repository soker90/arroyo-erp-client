import axios from 'axios';
import { CREATE_PRODUCTS } from '../types';

/**
 * Request action
 * @returns {{type: string}}
 * @private
 */
const _createProductRequest = () => ({ type: CREATE_PRODUCTS.REQUEST });

/**
 * Success action
 * @returns {{type: string}}
 * @private
 */
const _createProductSuccess = () => ({
  type: CREATE_PRODUCTS.SUCCESS,
});

const _createProductsSet = products => ({
  type: CREATE_PRODUCTS.SET,
  payload: {
    products,
  },
});

/**
 * Error action
 * @param error
 * @returns {{type: string, error: _createProductError.props}}
 * @private
 */
const _createProductError = error => ({
  type: CREATE_PRODUCTS.FAILURE,
  error,
});

/**
 * Crea un producto para los clientes
 * @param {Object} dataProduct
 * @param {function} callback
 * @returns {function(...[*]=)}
 */
export const createProduct = (dataProduct, callback) => async dispatch => {
  dispatch(_createProductRequest());
  try {
    const { data } = await axios.post('products/clients', dataProduct);

    dispatch(_createProductSuccess());
    dispatch(_createProductsSet(data));
    callback();
  } catch (error) {
    dispatch(_createProductError(error));
  }
};
