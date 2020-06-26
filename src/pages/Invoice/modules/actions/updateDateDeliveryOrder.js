import axios from 'axios';
import { UPDATE_DATE_DELIVERY_ORDER } from '../types';

/**
 * Request action for updateDateDeliveryOrder
 * @returns {{type: string}}
 * @private
 */
const _updateDateDeliveryOrderRequest = () => ({
  type: UPDATE_DATE_DELIVERY_ORDER.REQUEST,
});

/**
 * Success action for updateDateDeliveryOrder
 * @returns {{notification: {level: string, message: string}, type: string}}
 * @private
 */
const _updateDateDeliveryOrderSuccess = () => ({
  type: UPDATE_DATE_DELIVERY_ORDER.SUCCESS,
  payload: {
    level: 'success',
    message: 'Fecha actualizada',
  },
});

/**
 * Set data
 * @param {array} updateDateDeliveryOrder
 * @return {{payload: {deliveryOrders: array}, type: string}}
 * @private
 */
const _updateDateDeliveryOrderSet = ({ data }) => ({
  type: UPDATE_DATE_DELIVERY_ORDER.SET,
  payload: data,
});


/**
 * Error action for updateDateDeliveryOrder
 * @param error
 * @returns {{type: string, error: _createDeliveryOrderError.props}}
 * @private
 */
const _updateDateDeliveryOrderError = error => ({
  type: UPDATE_DATE_DELIVERY_ORDER.FAILURE,
  error,
});

/**
 * Actualiza la fecha del albaran
 * @param {Object} id
 * @param {any} date
 * @return {function(...[*]=)}
 */
export const updateDateDeliveryOrder = (id, date) => async dispatch => {
  dispatch(_updateDateDeliveryOrderRequest());
  const data = {
    date: new Date(date).getTime(),
  };

  try {
    const response = await axios.patch(`deliveryorders/${id}`, data);

    dispatch(_updateDateDeliveryOrderSuccess());
    dispatch(_updateDateDeliveryOrderSet(response));
  } catch (error) {
    console.error(error);
    dispatch(_updateDateDeliveryOrderError(error));
  }
};
