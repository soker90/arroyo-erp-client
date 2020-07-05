import axios from 'axios';
import { CONFIRM_INVOICE } from '../types';

/**
 * Request action
 * @returns {{type: string}}
 * @private
 */
const _confirmInvoiceRequest = () => ({ type: CONFIRM_INVOICE.REQUEST });

/**
 * Success action
 * @returns {{type: string}}
 * @private
 */
const _confirmInvoiceSuccess = () => ({
  type: CONFIRM_INVOICE.SUCCESS,
});

/**
 * Set action
 * @param {Object} data
 * @return {{payload: {provider: Object}, type: string}}
 * @private
 */
const _confirmInvoiceSet = data => ({
  type: CONFIRM_INVOICE.SET,
  payload: data,
});

/**
 * Error action
 * @param error
 * @returns {{type: string, error: _confirmInvoiceError.props}}
 * @private
 */
const _confirmInvoiceError = error => ({
  type: CONFIRM_INVOICE.FAILURE,
  error,
});

/**
 * Confirma la factura
 * @returns {function(...[*]=)}
 */
export const confirmInvoice = id => async dispatch => {
  dispatch(_confirmInvoiceRequest());

  try {
    const { data } = await axios.patch(`invoices/${id}/confirm`);

    dispatch(_confirmInvoiceSuccess());
    dispatch(_confirmInvoiceSet(data));
  } catch (error) {
    dispatch(_confirmInvoiceError(error));
  }
};
