import axios from 'axios';
import { GET_CLIENT_INVOICES } from '../types';

/**
 * Request action
 * @returns {{type: string}}
 * @private
 */
const _getClientInvoicesRequest = () => ({ type: GET_CLIENT_INVOICES.REQUEST });

/**
 * Success action
 * @returns {{type: string}}
 * @private
 */
const _getClientInvoicesSuccess = () => ({
  type: GET_CLIENT_INVOICES.SUCCESS,
});

const _getClientInvoicesSet = invoices => ({
  type: GET_CLIENT_INVOICES.SET,
  payload: {
    invoices,
  },
});

/**
 * Error action
 * @param error
 * @returns {{type: string, error: _getClientInvoicesError.props}}
 * @private
 */
const _getClientInvoicesError = error => ({
  type: GET_CLIENT_INVOICES.FAILURE,
  error,
});

/**
 * Trae las facturas del cliente
 * @param {String} year
 * @returns {function(...[*]=)}
 */
export const getClientInvoices = year => async dispatch => {
  dispatch(_getClientInvoicesRequest());
  try {
    const { data } = await axios(`client/invoices?year=${year}`);

    dispatch(_getClientInvoicesSuccess());
    dispatch(_getClientInvoicesSet(data));
  } catch (error) {
    dispatch(_getClientInvoicesError(error));
  }
};
