import axios from 'axios';
import { COLUMNS_INVOICES, CONCEPT } from 'constants/invoices';
import { CREATE_INVOICE } from '../types';
import { navigateTo } from 'utils';

/**
 * Request action for createInvoiceExpense
 * @returns {{type: string}}
 * @private
 */
const _createInvoiceRequest = () => ({ type: CREATE_INVOICE.REQUEST });

/**
 * Success action for createInvoiceExpense
 * @returns {{type: string}}
 * @private
 */
const _createInvoiceSuccess = () => ({
  type: CREATE_INVOICE.SUCCESS,
  payload: {
    level: 'success',
    message: 'Factura de compras creada',
  },
});

/**
 * Set data in redux
 * @returns {{type: string}}
 * @private
 */
const _createInvoiceSet = invoice => ({
  type: CREATE_INVOICE.SET,
  payload: {
    invoice,
  },
});
/**
 * Error action for createInvoiceExpense
 * @param error
 * @returns {{type: string, error: _getProvidersError.props}}
 * @private
 */
const _createInvoiceError = error => ({
  type: CREATE_INVOICE.FAILURE,
  error,
});

/**
 * Crea un nuevo producto
 * @param {Object} deliveryOrders
 */
export const createInvoice = deliveryOrders => async dispatch => {
  dispatch(_createInvoiceRequest());

  try {
    const { data } = await axios.post('invoices', {
      deliveryOrders,
      concept: CONCEPT.COMPRAS,
      bookColumn: COLUMNS_INVOICES.COMPRAS,
    });

    dispatch(_createInvoiceSuccess());
    dispatch(_createInvoiceSet(data));
    navigateTo(`facturas/${data._id}`);
  } catch (error) {
    dispatch(_createInvoiceError(error));
  }
};
