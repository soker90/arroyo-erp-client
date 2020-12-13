import axios from 'axios';
import { GET_PRICE_CHANGES } from '../types';

/**
 * Request action for getInitData
 * @returns {{type: string}}
 * @private
 */
const _getPriceChangesRequest = () => ({ type: GET_PRICE_CHANGES.REQUEST });

/**
 * Success action for getInitData
 * @returns {{type: string}}
 * @private
 */
const _getPriceChangesSuccess = () => ({
  type: GET_PRICE_CHANGES.SUCCESS,
});

const _getPriceChangesSet = priceChanges => ({
  type: GET_PRICE_CHANGES.SET,
  payload: {
    priceChanges,
  },
});

/**
 * Error action for getInitData
 * @param error
 * @returns {{type: string, error: _getPriceChangesError.props}}
 * @private
 */
const _getPriceChangesError = error => ({
  type: GET_PRICE_CHANGES.FAILURE,
  error,
});

/**
 * Trae el registro de cambio de precios
 * @returns {function(...[*]=)}
 */
export const getPriceChanges = () => async dispatch => {
  dispatch(_getPriceChangesRequest());

  try {
    const { data } = await axios('pricechanges');

    dispatch(_getPriceChangesSuccess());
    dispatch(_getPriceChangesSet(data));
  } catch (error) {
    dispatch(_getPriceChangesError(error));
  }
};
