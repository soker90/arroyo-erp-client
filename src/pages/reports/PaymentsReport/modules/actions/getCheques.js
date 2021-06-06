import axios from 'axios';

import { objectToParams } from 'utils';
import { GET_CHEQUES } from '../types';

/**
 * Request action
 * @returns {{type: string}}
 * @private
 */
const _getChequesRequest = () => ({ type: GET_CHEQUES.REQUEST });

/**
 * Success action
 * @returns {{type: string}}
 * @private
 */
const _getChequesSuccess = () => ({
  type: GET_CHEQUES.SUCCESS,
});

const _getChequesSet = dashboard => ({
  type: GET_CHEQUES.SET,
  payload: dashboard,
});

/**
 * Error action
 * @param error
 * @returns {{type: string, error: _getChequesError.props}}
 * @private
 */
const _getChequesError = error => ({
  type: GET_CHEQUES.FAILURE,
  error,
});

/**
 * Pide el historico de cheques
 * @returns {function(...[*]=)}
 */
export const getCheques = filters => async dispatch => {
  dispatch(_getChequesRequest());

  try {
    const { data } = await axios(`invoices/cheques${objectToParams(filters)}`);

    dispatch(_getChequesSuccess());
    dispatch(_getChequesSet(data));
  } catch (error) {
    dispatch(_getChequesError(error));
  }
};
