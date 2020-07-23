import axios from 'axios';
import { GET_INVOICES } from '../types';

/**
 * Request action
 * @returns {{type: string}}
 * @private
 */
const _getInvoicesRequest = () => ({ type: GET_INVOICES.REQUEST });

/**
 * Success action
 * @returns {{type: string}}
 * @private
 */
const _getInvoicesSuccess = () => ({
  type: GET_INVOICES.SUCCESS,
});

const _getInvoicesSet = invoices => ({
  type: GET_INVOICES.SET,
  payload: {
    invoices,
  },
});

/**
 * Error action
 * @param error
 * @returns {{type: string, error: _getProvidersError.props}}
 * @private
 */
const _getInvoicesError = error => ({
  type: GET_INVOICES.FAILURE,
  error,
});

/**
 * Trae las facturas
 * @param {String} year
 * @returns {function(...[*]=)}
 */
export const getInvoices = year => async dispatch => {
  dispatch(_getInvoicesRequest());

  try {
    const { data } = await axios(`invoices?year=${year}`);

    dispatch(_getInvoicesSuccess());
    dispatch(_getInvoicesSet(data));
  } catch (error) {
    dispatch(_getInvoicesError(error));
  }
};
