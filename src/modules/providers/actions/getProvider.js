import axios from 'axios';
import { GET_PROVIDER } from '../types';

/**
 * Request action
 * @returns {{type: string}}
 * @private
 */
const _getProviderRequest = () => ({ type: GET_PROVIDER.REQUEST });

/**
 * Success action
 * @returns {{type: string}}
 * @private
 */
const _getProviderSuccess = () => ({
  type: GET_PROVIDER.SUCCESS,
});

/**
 * Set action
 * @param {{provider: Object, billing: Object}} data
 * @return {{payload: {provider: Object, billing: Object}, type: string}}
 * @private
 */
const _getProviderSet = data => ({
  type: GET_PROVIDER.SET,
  payload: data,
});

/**
 * Error action for getInitData
 * @param error
 * @returns {{type: string, error: _getProvidersError.props}}
 * @private
 */
const _getProviderError = error => ({
  type: GET_PROVIDER.FAILURE,
  error,
});

/**
 * Trae los proveedores
 * @returns {function(...[*]=)}
 */
export const getProvider = id => async dispatch => {
  dispatch(_getProviderRequest());

  try {
    const { data } = await axios(`providers/${id}`);

    dispatch(_getProviderSuccess());
    dispatch(_getProviderSet(data));
  } catch (error) {
    dispatch(_getProviderError(error));
  }
};
