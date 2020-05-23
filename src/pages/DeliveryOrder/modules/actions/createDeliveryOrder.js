import axios from 'axios';
import {CREATE_DELIVERY_ORDER} from '../types';
import {navigateTo} from 'utils';

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
const _createDeliveryOrderSet = ({data}) => ({
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
export const createDeliveryOrder = provider => async dispatch => {
  dispatch(_createDeliveryOrderRequest());

  try {
    const response = await axios.post('deliveryorders', {provider});
    console.log(response);

    dispatch(_createDeliveryOrderSuccess());
    dispatch(_createDeliveryOrderSet(response));
    navigateTo(`albaranes/${response.data._id}`);
  } catch (error) {
    console.error(error);
    dispatch(_createDeliveryOrderError(error));
  }
};
