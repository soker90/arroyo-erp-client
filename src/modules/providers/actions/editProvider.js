import axios from 'axios';
import {EDIT_PROVIDER} from '../types';
import {getProvider} from './getProvider';

/**
 * Request action
 * @returns {{type: string}}
 * @private
 */
const _editProviderRequest = () => ({type: EDIT_PROVIDER.REQUEST});

/**
 * Success action
 * @param {String} name
 * @returns {{type: string}}
 * @private
 */
const _editProviderSuccess = name => ({
  type: EDIT_PROVIDER.SUCCESS,
  payload: {
    level: 'success',
    message: `${name} ha sido actualizado`,
  },
});

/**
 * Error action
 * @param error
 * @returns {{type: string, error: _getProvidersError.props}}
 * @private
 */
const _editProviderError = error => ({
  type: EDIT_PROVIDER.FAILURE,
  error,
});

/**
 * Editar proveedor
 * @param {String} id
 * @param {Object} data
 * @param {function} callback
 */
export const editProvider = (id, data, callback) => async dispatch => {
  dispatch(_editProviderRequest());

  try {
    await axios.patch(`providers/${id}`, data);

    dispatch(_editProviderSuccess(data.name));
    // eslint-disable-next-line no-unused-expressions
    callback?.();
    dispatch(getProvider(id));
  } catch (error) {
    dispatch(_editProviderError(error));
  }
};
