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

/**
 * Set action
 * @param {Object} invoices
 * @return {{payload: {provider: Object, billing: Object}, type: string}}
 * @private
 */
const _getClientInvoicesSet = invoices => ({
  type: GET_CLIENT_INVOICES.SET,
  payload: invoices,
});

/**
 * Error action for getInitData
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
 * @returns {function(...[*]=)}
 */
export const getClientInvoices = (id, offset, limit) => async dispatch => {
  dispatch(_getClientInvoicesRequest());

  try {
    const { data } = await axios(`client/invoices/short?client=${id}&offset=${offset}&limit=${limit}`);

    dispatch(_getClientInvoicesSuccess());
    dispatch(_getClientInvoicesSet(data));
  } catch (error) {
    dispatch(_getClientInvoicesError(error));
  }
};
