import axios from 'axios';
import { GET_CASH } from '../types';

/**
 * Request action
 * @returns {{type: string}}
 * @private
 */
const _getCashRequest = () => ({ type: GET_CASH.REQUEST });

/**
 * Success action
 * @returns {{type: string}}
 * @private
 */
const _getCashSuccess = () => ({
  type: GET_CASH.SUCCESS,
});

const _getCashSet = dashboard => ({
  type: GET_CASH.SET,
  payload: dashboard,
});

/**
 * Error action
 * @param error
 * @returns {{type: string, error: _getCashError.props}}
 * @private
 */
const _getCashError = error => ({
  type: GET_CASH.FAILURE,
  error,
});

/**
 * Pide los pagos pendientes de cobro
 * @param {string} year
 * @returns {function(...[*]=)}
 */
export const getCash = year => async dispatch => {
  dispatch(_getCashRequest());

  try {
    const { data } = await axios(`invoices/cash/${year}`);

    dispatch(_getCashSuccess());
    dispatch(_getCashSet(data));
  } catch (error) {
    dispatch(_getCashError(error));
  }
};
