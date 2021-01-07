import axios from 'axios';
import { GET_INVOICES_BY_PROVIDER } from '../types';
import { objectToParams } from '../../../utils';

/**
 * Request action
 * @returns {{type: string}}
 * @private
 */
const _getInvoicesByProviderRequest = () => ({ type: GET_INVOICES_BY_PROVIDER.REQUEST });

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
 * @param {array} invoices
 * @param {number} count
 * @return {{payload: {invoices: Object}, type: string}}
 * @private
 */
const _getInvoicesByProviderSet = ({ invoices, count }) => ({
  type: GET_INVOICES_BY_PROVIDER.SET,
  payload: {
    invoices,
    invoicesCount: count,
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
 * Trae las facturas de los proveedores
 * @param {Object} filters
 * @returns {function(...[*]=)}
 */
export const getInvoicesByProvider = filters => async dispatch => {
  dispatch(_getInvoicesByProviderRequest());

  try {
    const { data } = await axios(`invoices/short${objectToParams(filters)}`);

    dispatch(_getInvoicesByProviderSuccess());
    dispatch(_getInvoicesByProviderSet(data));
  } catch (error) {
    console.error(error);
    dispatch(_getInvoicesByProviderError(error));
  }
};
