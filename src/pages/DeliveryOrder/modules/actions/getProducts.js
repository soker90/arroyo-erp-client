import axios from 'axios';
import {GET_PRODUCTS_NEW_ALBARAN} from 'actions/types';

/**
 * Request action for getDeliveryOrders
 * @returns {{type: string}}
 * @private
 */
const _getProductsRequest = () => ({type: GET_PRODUCTS_NEW_ALBARAN.REQUEST});

/**
 * Success action for getPducts
 * @param {Object} data
 * @returns {{type: (string|string), providers: {all: *}}}
 * @private
 */
const _getProductsSuccess = ({data}) => ({
  type: GET_PRODUCTS_NEW_ALBARAN.SUCCESS,
  products: {
    products: data.getProducts,
  },
});

/**
 * Error action for getDeliveryOrders
 * @param error
 * @returns {{type: string, error: _getProductsError.props}}
 * @private
 */
const _getProductsError = error => ({
  type: GET_PRODUCTS_NEW_ALBARAN.FAILURE,
  error,
});

/**
 * Pide todos los datos necsearios para iniciar la aplicacion
 * una vez logueado
 * @returns {function(...[*]=)}
 */
export const getProducts = idProvider => async dispatch => {
  dispatch(_getProductsRequest());

  try {
    const {data} = await axios.post('',
      {
        query: `
          query { 
            getProducts(provider: "${idProvider}") {
              _id
              name
              code
            }
          }`,
      },
    );

    if (data.errors) {
      dispatch(_getProductsError(data.errors[0]));
      return;
    }

    dispatch(_getProductsSuccess(data));
  } catch (error) {
    console.log(error);
    dispatch(_getProductsSuccess(error))
  }
};
