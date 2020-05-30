import axios from 'axios';
import { navigateTo } from 'utils';
import { ADD_PRODUCT_TO_DELIVERY_ORDER } from '../types';

/**
 * Request action for createDeliveryOrder
 * @returns {{type: string}}
 * @private
 */
const _addProductToDeliveryOrderRequest = () => ({
  type: ADD_PRODUCT_TO_DELIVERY_ORDER.REQUEST,
});

/**
 * Success action for createDeliveryOrder
 * @returns {{notification: {level: string, message: string}, type: string}}
 * @private
 */
const _addProductToDeliveryOrderSuccess = () => ({
  type: ADD_PRODUCT_TO_DELIVERY_ORDER.SUCCESS,
  notification: {
    level: 'success',
    message: 'Albarán creado',
  },
});

/**
 * Set data
 * @param {array} deliveryOrders
 * @return {{payload: {deliveryOrders: array}, type: string}}
 * @private
 */
const _addProductToDeliveryOrderSet = ({ data }) => ({
  type: ADD_PRODUCT_TO_DELIVERY_ORDER.SET,
  payload: data,
});


/**
 * Error action for createDeliveryOrder
 * @param error
 * @returns {{type: string, error: _createDeliveryOrderError.props}}
 * @private
 */
const _addProductToDeliveryOrderError = error => ({
  type: ADD_PRODUCT_TO_DELIVERY_ORDER.FAILURE,
  error,
});

/**
 * Crea un nuevo albarán del proveedor
 * @returns {function(...[*]=)}
 */
export const addProductToDeliveryOrder = (id, model, callback) => async dispatch => {
  dispatch(_addProductToDeliveryOrderRequest());

  try {
    const response = await axios.post(`deliveryorders/${id}/product`, model);

    dispatch(_addProductToDeliveryOrderSuccess());
    dispatch(_addProductToDeliveryOrderSet(response));
    callback();
  } catch (error) {
    console.error(error);
    dispatch(_addProductToDeliveryOrderError(error));
  }
};
