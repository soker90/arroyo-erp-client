import axios from 'axios';
import { DIVIDE_PAYMENT } from '../types';

/**
 * Request action
 * @returns {{type: string}}
 * @private
 */
const _mergePaymentRequest = () => ({ type: DIVIDE_PAYMENT.REQUEST });

/**
 * Success action
 * @returns {{type: string}}
 * @private
 */
const _mergePaymentSuccess = () => ({
  type: DIVIDE_PAYMENT.SUCCESS,
  payload: {
    level: 'success',
    message: '¡Dividido!',
  },
});

/**
 * Set action
 * @returns {{type: string}}
 * @private
 */
const _mergePaymentSet = ({ data }) => ({
  type: DIVIDE_PAYMENT.SET,
  payload: {
    payments: data,
  },
});

/**
 * Error action
 * @param error
 * @returns {{type: string, error: _mergePaymentError.props}}
 * @private
 */
const _mergePaymentError = error => ({
  type: DIVIDE_PAYMENT.FAILURE,
  error,
});

/**
 * Divide un pago fusionado
 * @param {string} id
 */
export const dividePayment = id => async dispatch => {
  dispatch(_mergePaymentRequest());

  try {
    const response = await axios.put(`payments/divide/${id}`);

    dispatch(_mergePaymentSuccess());
    dispatch(_mergePaymentSet(response));
  } catch (error) {
    dispatch(_mergePaymentError(error));
  }
};
