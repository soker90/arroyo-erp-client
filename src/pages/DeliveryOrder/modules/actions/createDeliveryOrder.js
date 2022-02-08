import axios from 'axios';
import { navigateTo } from 'utils';
import { CREATE_DELIVERY_ORDER } from '../types';

/**
 * Request action for createDeliveryOrder
 * @returns {{type: string}}
 * @private
 */
const _createDeliveryOrderRequest = () => ({
  type: CREATE_DELIVERY_ORDER.REQUEST,
});

/**
 * Success action for createDeliveryOrder
 * @returns {{notification: {level: string, message: string}, type: string}}
 * @private
 */
const _createDeliveryOrderSuccess = () => ({
  type: CREATE_DELIVERY_ORDER.SUCCESS,
  payload: {
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
const _createDeliveryOrderSet = ({ data }) => ({
  type: CREATE_DELIVERY_ORDER.SET,
  payload: data,
});

/**
 * Error action for createDeliveryOrder
 * @param error
 * @returns {{type: string, error: _createDeliveryOrderError.props}}
 * @private
 */
const _createDeliveryOrderError = error => ({
  type: CREATE_DELIVERY_ORDER.FAILURE,
  error,
});

/**
 * Crea un nuevo albarán del proveedor
 * @returns {function(...[*]=)}
 */
export const createDeliveryOrder = ({
  provider,
  callback,
  navigate,
}) => async dispatch => {
  dispatch(_createDeliveryOrderRequest());

  try {
    const response = await axios.post('deliveryorders', { provider });

    dispatch(_createDeliveryOrderSuccess());
    dispatch(_createDeliveryOrderSet(response));
    // eslint-disable-next-line
    callback?.();
    navigateTo(`albaranes/${response.data._id}?search=creado`, navigate);
  } catch (error) {
    console.error(error);
    dispatch(_createDeliveryOrderError(error));
  }
};
