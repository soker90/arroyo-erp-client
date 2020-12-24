import axios from 'axios';
import { GET_PRODUCTS } from '../types';

/**
 * Request action
 * @returns {{type: string}}
 * @private
 */
const _getProductsRequest = () => ({ type: GET_PRODUCTS.REQUEST });

/**
 * Success action
 * @returns {{type: string}}
 * @private
 */
const _getProductsSuccess = () => ({
  type: GET_PRODUCTS.SUCCESS,
});

const _getProductsSet = products => ({
  type: GET_PRODUCTS.SET,
  payload: {
    products,
  },
});

/**
 * Error action
 * @param error
 * @returns {{type: string, error: _getProductsError.props}}
 * @private
 */
const _getProductsError = error => ({
  type: GET_PRODUCTS.FAILURE,
  error,
});

/**
 * Trae todos los productos sin proveedor
 * @returns {function(...[*]=)}
 */
export const getProducts = () => async dispatch => {
  dispatch(_getProductsRequest());
  try {
    const { data } = await axios('products');

    dispatch(_getProductsSuccess());
    dispatch(_getProductsSet(data));
  } catch (error) {
    dispatch(_getProductsError(error));
  }
};
