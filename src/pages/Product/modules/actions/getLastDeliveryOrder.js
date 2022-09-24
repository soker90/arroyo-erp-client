import axios from 'axios';
import { GET_LAST_DELIVERY_ORDER } from '../types';

/**
 * Request action
 * @returns {{type: string}}
 * @private
 */
const _getLastDeliveryOrderRequest = () => ({ type: GET_LAST_DELIVERY_ORDER.REQUEST });

/**
 * Success action
 * @returns {{type: string}}
 * @private
 */
const _getProductLastDeliveryOrderSuccess = () => ({
  type: GET_LAST_DELIVERY_ORDER.SUCCESS,
});

/**
 * Set action
 * @param {Object} data
 * @return {{payload: {product: Object, prices: []}, type: string}}
 * @private
 */
const _getLastDeliveryOrderSet = data => ({
  type: GET_LAST_DELIVERY_ORDER.SET,
  payload: { last: data.last, nextToLast: data.nextToLast },
});

/**
 * Error action for getProduct
 * @param error
 * @returns {{type: string, error: _getLastDeliveryOrderError.props}}
 * @private
 */
const _getLastDeliveryOrderError = error => ({
  type: GET_LAST_DELIVERY_ORDER.FAILURE,
  error,
});

/**
 * Trae los proveedores
 * @returns {function(...[*]=)}
 */
export const getLastDeliveryOrder = id => async dispatch => {
  dispatch(_getLastDeliveryOrderRequest());

  try {
    const { data } = await axios(`products/last-delivery-order/${id}`);

    dispatch(_getProductLastDeliveryOrderSuccess());
    dispatch(_getLastDeliveryOrderSet(data));
  } catch (error) {
    dispatch(_getLastDeliveryOrderError(error));
  }
};
