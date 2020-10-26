import axios from 'axios';
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
 * @returns {{payload: {level: string, message: string}, type: string}}
 * @private
 */
const _addProductToDeliveryOrderSuccess = () => ({
  type: ADD_PRODUCT_TO_DELIVERY_ORDER.SUCCESS,
  payload: {
    level: 'success',
    message: 'Producto añadido',
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
export const addProductToDeliveryOrder = (
  model, callback
) => async (dispatch, getState) => {
  dispatch(_addProductToDeliveryOrderRequest());
  const id = getState().deliveryOrders._id;

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
