import axios from 'axios';
import { ADD_DELIVERY_ORDER } from '../types';

/**
 * Request action
 * @returns {{type: string}}
 * @private
 */
const _createDeliveryOrderRequest = () => ({ type: ADD_DELIVERY_ORDER.REQUEST });

/**
 * Success action
 * @returns {{type: string}}
 * @private
 */
const _createDeliveryOrderSuccess = () => ({
  type: ADD_DELIVERY_ORDER.SUCCESS,
  payload: {
    level: 'success',
    message: 'Albarán añadido correctamente',
  },
});

/**
 * Error action
 * @param error
 * @returns {{type: string, error: _createDeliveryOrderError.props}}
 * @private
 */
const _createDeliveryOrderError = error => ({
  type: ADD_DELIVERY_ORDER.FAILURE,
  error,
});

/**
 * Añade un albarán a la factura
 * @param {String} id
 * @returns {function(...[*]=)}
 */
export const createDeliveryOrder = id => async dispatch => {
  dispatch(_createDeliveryOrderRequest());

  try {
    await axios.post(`client/invoices/${id}/deliveryOrder`);

    dispatch(_createDeliveryOrderSuccess());
  } catch (error) {
    dispatch(_createDeliveryOrderError(error));
  }
};
