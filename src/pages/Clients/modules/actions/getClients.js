import axios from 'axios';
import { GET_CLIENTS } from '../types';

/**
 * Request action for getInitData
 * @returns {{type: string}}
 * @private
 */
const _getClientsRequest = () => ({ type: GET_CLIENTS.REQUEST });

/**
 * Success action for getInitData
 * @returns {{type: string}}
 * @private
 */
const _getClientsSuccess = () => ({
  type: GET_CLIENTS.SUCCESS,
});

const _getClientsSet = clients => ({
  type: GET_CLIENTS.SET,
  payload: {
    clients,
  },
});

/**
 * Error action for getInitData
 * @param error
 * @returns {{type: string, error: _getClientsError.props}}
 * @private
 */
const _getClientsError = error => ({
  type: GET_CLIENTS.FAILURE,
  error,
});

/**
 * Trae los clientes
 * @returns {function(...[*]=)}
 */
export const getClients = () => async dispatch => {
  dispatch(_getClientsRequest());

  try {
    const { data } = await axios('clients');

    dispatch(_getClientsSuccess());
    dispatch(_getClientsSet(data));
  } catch (error) {
    dispatch(_getClientsError(error));
  }
};
