import axios from 'axios';
import { getProviders } from './getProviders';
import { CREATE_PROVIDER } from '../types';
import { TYPE_PROVIDER } from '../../../../constants';

/**
 * Request action for createProviders
 * @returns {{type: string}}
 * @private
 */
const _createProviderRequest = () => ({ type: CREATE_PROVIDER.REQUEST });

/**
 * Success action for createProviders
 * @returns {{type: string}}
 * @private
 */
const _createProviderSuccess = () => ({
  type: CREATE_PROVIDER.SUCCESS,
  payload: {
    level: 'success',
    message: 'El proveedor se ha creado correctamente',
  },
});

/**
 * Error action for createClient
 * @param error
 * @returns {{type: string, error: _getProvidersError.props}}
 * @private
 */
const _createProviderError = error => ({
  type: CREATE_PROVIDER.FAILURE,
  error,
});

/**
 * Crea un nuevo proveedor
 * @param {Object} provider
 * @param {function} callback
 */
export const createProvider = (provider, callback) => async dispatch => {
  dispatch(_createProviderRequest());

  try {
    await axios.post('providers', {
      ...provider,
      type: TYPE_PROVIDER.EXPENSES,
    });

    dispatch(_createProviderSuccess());
    // eslint-disable-next-line no-unused-expressions
    callback?.();
    dispatch(getProviders());
  } catch (error) {
    dispatch(_createProviderError(error));
  }
};
