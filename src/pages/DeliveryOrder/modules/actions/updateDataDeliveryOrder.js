/* eslint-disable no-unused-expressions */
import axios from 'axios';
import { format } from 'utils';
import { UPDATE_DATA_DELIVERY_ORDER } from '../types';

/**
 * Request action for updateDateDeliveryOrder
 * @returns {{type: string}}
 * @private
 */
const _updateDataDeliveryOrderRequest = () => ({
  type: UPDATE_DATA_DELIVERY_ORDER.REQUEST,
});

/**
 * Success action for updateDateDeliveryOrder
 * @returns {{notification: {level: string, message: string}, type: string}}
 * @private
 */
const _updateDataDeliveryOrderSuccess = () => ({
  type: UPDATE_DATA_DELIVERY_ORDER.SUCCESS,
  payload: {
    level: 'success',
    message: 'Datos del albarán actualizados',
  },
});

/**
 * Set data
 * @param {array} updateDateDeliveryOrder
 * @return {{payload: {deliveryOrders: array}, type: string}}
 * @private
 */
const _updateDateDeliveryOrderSet = ({ data }) => ({
  type: UPDATE_DATA_DELIVERY_ORDER.SET,
  payload: data,
});

/**
 * Error action for updateDateDeliveryOrder
 * @param error
 * @returns {{type: string, error: _updateDataDeliveryOrderError.props}}
 * @private
 */
const _updateDataDeliveryOrderError = error => ({
  type: UPDATE_DATA_DELIVERY_ORDER.FAILURE,
  error,
});

/**
 * Actualiza la fecha del albaran
 * @param {Object} id
 * @param {Date} date
 * @param {string} note
 * @param {string} totals
 * @return {function(...[*]=)}
 */
export const updateDataDeliveryOrder = (id, { date, note, totals }, callback) => async dispatch => {
  dispatch(_updateDataDeliveryOrderRequest());
  const data = {
    ...(date && { date: format.dateToSend(date) }),
    ...(note !== undefined && { note }),
    ...(totals && { totals }),
  };

  try {
    const response = await axios.patch(`deliveryorders/${id}`, data);

    dispatch(_updateDataDeliveryOrderSuccess());
    dispatch(_updateDateDeliveryOrderSet(response));
    callback?.();
  } catch (error) {
    console.error(error);
    dispatch(_updateDataDeliveryOrderError(error));
  }
};
