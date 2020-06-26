import axios from 'axios';
import { UPDATE_PRICE_PRODUCT } from '../types';

/**
 * Request action
 * @returns {{type: string}}
 * @private
 */
const _updatePriceRequest = () => ({ type: UPDATE_PRICE_PRODUCT.REQUEST });

/**
 * Success action
 * @returns {{type: string}}
 * @private
 */
const _updatePriceSuccess = () => ({
  type: UPDATE_PRICE_PRODUCT.SUCCESS,
  payload: {
    level: 'success',
    message: 'Se ha actualizado el precio',
  },
});


/**
 * Error action for getInitData
 * @param error
 * @returns {{type: string, error: _getProvidersError.props}}
 * @private
 */
const _updatePriceError = error => ({
  type: UPDATE_PRICE_PRODUCT.FAILURE,
  error,
});

/**
 * Actualiza el precio del producto
 * @param {string} id
 * @param {Number} price
 * @param {Number} date
 * @returns {function(...[*]=)}
 */
export const updatePrice = (id, price, date) => async dispatch => {
  dispatch(_updatePriceRequest());

  try {
    await axios.post(`products/${id}/prices`, { price, date });

    dispatch(_updatePriceSuccess());
  } catch (error) {
    dispatch(_updatePriceError(error));
  }
};
