import axios from 'axios';
import { DELETE_CLIENT_INVOICE } from '../types';

/**
 * Request action
 * @returns {{type: string}}
 * @private
 */
const _deleteClientInvoiceRequest = () => ({ type: DELETE_CLIENT_INVOICE.REQUEST });

/**
 * Success action
 * @returns {{type: string}}
 * @private
 */
const _deleteClientInvoiceSuccess = () => ({
  type: DELETE_CLIENT_INVOICE.SUCCESS,
  payload: {
    level: 'success',
    message: 'Factura eliminada',
  },
});

/**
 * Error action
 * @param error
 * @returns {{type: string, error: _deleteClientInvoiceError.props}}
 * @private
 */
const _deleteClientInvoiceError = error => ({
  type: DELETE_CLIENT_INVOICE.FAILURE,
  error,
});

/**
 * Elimina la factura
 * @param {string} id
 * @param {function} callback
 * @returns {function(...[*]=)}
 */
export const deleteClientInvoice = (id, callback) => async dispatch => {
  dispatch(_deleteClientInvoiceRequest());

  try {
    await axios.delete(`client/invoices/${id}`);

    dispatch(_deleteClientInvoiceSuccess());
    callback();
  } catch (error) {
    dispatch(_deleteClientInvoiceError(error));
  }
};
