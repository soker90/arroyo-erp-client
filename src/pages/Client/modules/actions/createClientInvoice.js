import axios from 'axios';
import { CREATE_CLIENT_INVOICES } from '../types';

/**
 * Request action
 * @returns {{type: string}}
 * @private
 */
const _createClientInvoiceRequest = () => ({ type: CREATE_CLIENT_INVOICES.REQUEST });

/**
 * Success action
 * @returns {{type: string}}
 * @private
 */
const _createClientInvoiceSuccess = () => ({
  type: CREATE_CLIENT_INVOICES.SUCCESS,
});

/**
 * Error action
 * @param error
 * @returns {{type: string, error: _createClientInvoiceError.props}}
 * @private
 */
const _createClientInvoiceError = error => ({
  type: CREATE_CLIENT_INVOICES.FAILURE,
  error,
});

/**
 * Crear factura de cliente
 * @param {String} id
 */
export const createClientInvoice = id => async dispatch => {
  dispatch(_createClientInvoiceRequest());

  try {
    await axios.post('client/invoices', { client: id });

    dispatch(_createClientInvoiceSuccess());
    // NavigateTo
  } catch (error) {
    dispatch(_createClientInvoiceError(error));
  }
};
