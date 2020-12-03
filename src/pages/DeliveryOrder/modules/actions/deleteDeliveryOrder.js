import axios from 'axios';
import { DELETE_DELIVERY_ORDER } from '../types';

/**
 * Request action for createDeliveryOrder
 * @returns {{type: string}}
 * @private
 */
const _deleteDeliveryOrderRequest = () => ({
  type: DELETE_DELIVERY_ORDER.REQUEST,
});

/**
 * Success action for createDeliveryOrder
 * @returns {{payload: {level: string, message: string}, type: string}}
 * @private
 */
const _deleteDeliveryOrderSuccess = () => ({
  type: DELETE_DELIVERY_ORDER.SUCCESS,
  payload: {
    level: 'success',
    message: 'Se ha eliminado el albarán correctamente',
  },
});

/**
 * Error action for createDeliveryOrder
 * @param error
 * @returns {{type: string, error: _deleteDeliveryOrderError.props}}
 * @private
 */
const _deleteDeliveryOrderError = error => ({
  type: DELETE_DELIVERY_ORDER.FAILURE,
  error,
});

/**
 * Elimina el albarán
 * @returns {function(...[*]=)}
 */
export const deleteDeliveryOrder = () => async (dispatch, getState) => {
  dispatch(_deleteDeliveryOrderRequest());
  const id = getState().deliveryOrders._id;

  try {
    await axios.delete(`deliveryorders/${id}`);

    dispatch(_deleteDeliveryOrderSuccess());
  } catch (error) {
    console.error(error);
    dispatch(_deleteDeliveryOrderError(error));
  }
};
