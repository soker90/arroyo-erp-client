import axios from 'axios';
import { MERGE_PAYMENT } from '../types';

/**
 * Request action
 * @returns {{type: string}}
 * @private
 */
const _mergePaymentRequest = () => ({ type: MERGE_PAYMENT.REQUEST });

/**
 * Success action
 * @returns {{type: string}}
 * @private
 */
const _mergePaymentSuccess = () => ({
  type: MERGE_PAYMENT.SUCCESS,
  payload: {
    level: 'success',
    message: '¡Fusionado!',
  },
});

/**
 * Set action
 * @returns {{type: string}}
 * @private
 */
const _mergePaymentSet = ({ data }) => ({
  type: MERGE_PAYMENT.SET,
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
  type: MERGE_PAYMENT.FAILURE,
  error,
});

/**
 * Mergea varios pagos
 * @param {Array} payments
 */
export const mergePayments = payments => async dispatch => {
  dispatch(_mergePaymentRequest());

  try {
    const response = await axios.post('payments/merge', { payments });

    dispatch(_mergePaymentSuccess());
    dispatch(_mergePaymentSet(response));
  } catch (error) {
    dispatch(_mergePaymentError(error));
  }
};
