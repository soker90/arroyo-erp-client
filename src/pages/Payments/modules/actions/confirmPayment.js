import axios from 'axios';
import { CONFIRM_PAYMENT } from '../types';
import { getPayments } from './getPayments';

/**
 * Request action
 * @returns {{type: string}}
 * @private
 */
const _confirmPaymentRequest = () => ({ type: CONFIRM_PAYMENT.REQUEST });

/**
 * Success action
 * @returns {{type: string}}
 * @private
 */
const _confirmPaymentSuccess = () => ({
  type: CONFIRM_PAYMENT.SUCCESS,
  payload: {
    level: 'success',
    message: 'Pago aplicado',
  },
});

/**
 * Error action
 * @param error
 * @returns {{type: string, error: _confirmPaymentError.props}}
 * @private
 */
const _confirmPaymentError = error => ({
  type: CONFIRM_PAYMENT.FAILURE,
  error,
});

/**
 * Confirma la aplicación del pago
 * @param {String} id
 * @param {Object} data
 * @param {function} callback
 */
export const confirmPayment = (id, data, callback) => async dispatch => {
  dispatch(_confirmPaymentRequest());

  try {
    await axios.patch(`payments/${id}/confirm`, data);

    dispatch(_confirmPaymentSuccess());
    callback();
    dispatch(getPayments());
  } catch (error) {
    dispatch(_confirmPaymentError(error));
  }
};
