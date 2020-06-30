import axios from 'axios';
import { CREATE_INVOICE } from '../types';

/**
 * Request action for createProduct
 * @returns {{type: string}}
 * @private
 */
const _createInvoiceRequest = () => ({ type: CREATE_INVOICE.REQUEST });

/**
 * Success action for ccreateProduct
 * @returns {{type: string}}
 * @private
 */
const _createInvoiceSuccess = () => ({
  type: CREATE_INVOICE.SUCCESS,
  payload: {
    level: 'success',
    message: 'Factura de compras creada'
  }
});

/**
 * Error action for createProduct
 * @param error
 * @returns {{type: string, error: _getProvidersError.props}}
 * @private
 */
const _createInvoiceError = error => ({
  type: CREATE_INVOICE.FAILURE,
  error
});

/**
 * Crea un nuevo producto
 * @param {Object} deliveryOrders
 */
export const createInvoice = deliveryOrders => async dispatch => {
  dispatch(_createInvoiceRequest());

  try {
    await axios.post('invoices', {
      deliveryOrders,
      concept: 'Compras'
    });

    dispatch(_createInvoiceSuccess());
  } catch (error) {
    dispatch(_createInvoiceError(error));
  }
};
