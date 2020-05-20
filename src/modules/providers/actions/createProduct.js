import axios from 'axios';
import {CREATE_PRODUCTS} from '../types';
import {getProducts} from 'modules/products/actions/getProducts';

/**
 * Request action for createProduct
 * @returns {{type: string}}
 * @private
 */
const _createProductRequest = () => ({type: CREATE_PRODUCTS.REQUEST});

/**
 * Success action for ccreateProduct
 * @returns {{type: string}}
 * @private
 */
const _createProductSuccess = product => ({
  type: CREATE_PRODUCTS.SUCCESS,
  payload: {
    level: 'success',
    message: `El producto ${product} se ha creado correctamente`,
  },
});

/**
 * Error action for createProduct
 * @param error
 * @returns {{type: string, error: _getProvidersError.props}}
 * @private
 */
const _createProductError = error => ({
  type: CREATE_PRODUCTS.FAILURE,
  error,
});

/**
 * Crea un nuevo producto
 * @param {Object} product
 * @param {function} callback
 */
export const createProduct = (product, callback) => async dispatch => {
  dispatch(_createProductRequest());

  try {
    await axios.post('products', product);

    dispatch(_createProductSuccess(product.name));
    // eslint-disable-next-line no-unused-expressions
    callback?.();
    dispatch(getProducts(product.provider));
  } catch (error) {
    dispatch(_createProductError(error));
  }
};
