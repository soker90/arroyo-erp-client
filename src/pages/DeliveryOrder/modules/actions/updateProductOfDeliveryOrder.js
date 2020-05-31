import axios from 'axios';
import { UPDATE_PRODUCT_OF_DELIVERY_ORDER } from '../types';

/**
 * Request action
 * @returns {{type: string}}
 * @private
 */
const _updateProductOfDeliveryOrderRequest = () => ({
  type: UPDATE_PRODUCT_OF_DELIVERY_ORDER.REQUEST,
});

/**
 * Success action
 * @returns {{payload: {level: string, message: string}, type: string}}
 * @private
 */
const _updateProductOfDeliveryOrderSuccess = () => ({
  type: UPDATE_PRODUCT_OF_DELIVERY_ORDER.SUCCESS,
  payload: {
    level: 'success',
    message: 'Producto actualizado',
  },
});

/**
 * Set data
 * @param {array} deliveryOrders
 * @return {{payload: {deliveryOrders: array}, type: string}}
 * @private
 */
const _updateProductOfDeliveryOrderSet = ({ data }) => ({
  type: UPDATE_PRODUCT_OF_DELIVERY_ORDER.SET,
  payload: data,
});


/**
 * Error action for createDeliveryOrder
 * @param error
 * @returns {{type: string, error: _createDeliveryOrderError.props}}
 * @private
 */
const _updateProductOfDeliveryOrderError = error => ({
  type: UPDATE_PRODUCT_OF_DELIVERY_ORDER.FAILURE,
  error,
});

/**
 * Crea un nuevo albarán del proveedor
 * @returns {function(...[*]=)}
 */
export const updateProductOfDeliveryOrder = (
  index, model, callback
) => async (dispatch, getState) => {
  dispatch(_updateProductOfDeliveryOrderRequest());
  const id = getState().deliveryOrders._id;

  try {
    const response = await axios.put(`deliveryorders/${id}/product/${index}`, model);

    dispatch(_updateProductOfDeliveryOrderSuccess());
    dispatch(_updateProductOfDeliveryOrderSet(response));
    callback();
  } catch (error) {
    console.error(error);
    dispatch(_updateProductOfDeliveryOrderError(error));
  }
};
