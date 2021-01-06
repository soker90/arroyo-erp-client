import axios from 'axios';
import { GET_CLIENT_INVOICE } from '../types';

/**
 * Request action
 * @returns {{type: string}}
 * @private
 */
const _getClientInvoiceRequest = () => ({ type: GET_CLIENT_INVOICE.REQUEST });

/**
 * Success action
 * @returns {{type: string}}
 * @private
 */
const _getClientInvoiceSuccess = () => ({
  type: GET_CLIENT_INVOICE.SUCCESS,
});

/**
 * Set action
 * @param {Object} data
 * @return {{payload: {provider: Object}, type: string}}
 * @private
 */
const _getClientInvoiceSet = data => ({
  type: GET_CLIENT_INVOICE.SET,
  payload: data,
});

/**
 * Error action for getInitData
 * @param error
 * @returns {{type: string, error: _getClientInvoiceError.props}}
 * @private
 */
const _getClientInvoiceError = error => ({
  type: GET_CLIENT_INVOICE.FAILURE,
  error,
});

/**
 * Trae las facturas de clientes
 * @returns {function(...[*]=)}
 */
export const getClientInvoice = id => async dispatch => {
  dispatch(_getClientInvoiceRequest());

  try {
    const { data } = await axios(`client/invoices/${id}`);

    dispatch(_getClientInvoiceSuccess());
    dispatch(_getClientInvoiceSet(data));
  } catch (error) {
    dispatch(_getClientInvoiceError(error));
  }
};
