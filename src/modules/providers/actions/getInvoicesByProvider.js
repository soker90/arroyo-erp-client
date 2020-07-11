import axios from 'axios';
import {GET_INVOICES_BY_PROVIDER} from '../types';

/**
 * Request action
 * @returns {{type: string}}
 * @private
 */
const _getInvoicesByProviderRequest = () => ({type: GET_INVOICES_BY_PROVIDER.REQUEST});

/**
 * Success action
 * @returns {{type: string}}
 * @private
 */
const _getInvoicesByProviderSuccess = () => ({
  type: GET_INVOICES_BY_PROVIDER.SUCCESS,
});

/**
 * Set action
 * @param {Object} invoices
 * @return {{payload: {invoices: Object}, type: string}}
 * @private
 */
const _getInvoicesByProviderSet = invoices => ({
  type: GET_INVOICES_BY_PROVIDER.SET,
  payload: {
    invoices,
  },
});

/**
 * Error action for getInitData
 * @param error
 * @returns {{type: string, error: _getProvidersError.props}}
 * @private
 */
const _getInvoicesByProviderError = error => ({
  type: GET_INVOICES_BY_PROVIDER.FAILURE,
  error,
});

/**
 * Trae los proveedores
 * @returns {function(...[*]=)}
 */
export const getInvoicesByProvider = id => async dispatch => {
  dispatch(_getInvoicesByProviderRequest());

  try {
    const {data} = await axios(`invoices/short?provider=${id}`);

    dispatch(_getInvoicesByProviderSuccess());
    dispatch(_getInvoicesByProviderSet(data));
  } catch (error) {
    console.error(error);
    dispatch(_getInvoicesByProviderError(error));
  }
};
