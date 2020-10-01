import axios from 'axios';
import { CREATE_INVOICE_EXPENSE } from '../types';
import { navigateTo } from '../../../utils';

/**
 * Request action for createInvoiceExpense
 * @returns {{type: string}}
 * @private
 */
const _createInvoiceExpenseRequest = () => ({ type: CREATE_INVOICE_EXPENSE.REQUEST });

/**
 * Success action for createInvoiceExpense
 * @returns {{type: string}}
 * @private
 */
const _createInvoiceExpenseSuccess = () => ({
  type: CREATE_INVOICE_EXPENSE.SUCCESS,
  payload: {
    level: 'success',
    message: 'Factura creada',
  },
});

/**
 * Set data in redux
 * @returns {{type: string}}
 * @private
 */
const _createInvoiceExpenseSet = invoice => ({
  type: CREATE_INVOICE_EXPENSE.SET,
  payload: {
    invoice,
  },
});
/**
 * Error action for createInvoiceExpense
 * @param error
 * @returns {{type: string, error: _createInvoiceExpenseError.props}}
 * @private
 */
const _createInvoiceExpenseError = error => ({
  type: CREATE_INVOICE_EXPENSE.FAILURE,
  error,
});

/**
 * Crea un nuevo producto
 * @param {Object} sendData
 */
export const createInvoiceExpense = (sendData, callback) => async dispatch => {
  console.log(sendData);
  dispatch(_createInvoiceExpenseRequest());

  try {
    const { data } = await axios.post('invoices', sendData);

    dispatch(_createInvoiceExpenseSuccess());
    dispatch(_createInvoiceExpenseSet(data));

    navigateTo(`facturas/${data._id}`);
  } catch (error) {
    dispatch(_createInvoiceExpenseError(error));
  }
};
