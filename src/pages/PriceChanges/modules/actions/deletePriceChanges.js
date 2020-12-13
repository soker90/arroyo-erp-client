import axios from 'axios';
import { DELETE_PRICE_CHANGES } from '../types';

/**
 * Request action for getInitData
 * @returns {{type: string}}
 * @private
 */
const _deletePriceChangesRequest = () => ({ type: DELETE_PRICE_CHANGES.REQUEST });

/**
 * Success action for getInitData
 * @returns {{type: string}}
 * @private
 */
const _deletePriceChangesSuccess = () => ({
  type: DELETE_PRICE_CHANGES.SUCCESS,
});

const _deletePriceChangesSet = ({
  priceChanges,
  count,
}) => ({
  type: DELETE_PRICE_CHANGES.SET,
  payload: {
    priceChanges,
    count,
  },
});

/**
 * Error action for getInitData
 * @param error
 * @returns {{type: string, error: _deletePriceChangesError.props}}
 * @private
 */
const _deletePriceChangesError = error => ({
  type: DELETE_PRICE_CHANGES.FAILURE,
  error,
});

/**
 * Trae el registro de cambio de precios
 * @param {string} id
 * @returns {function(...[*]=)}
 */
export const deletePriceChanges = id => async dispatch => {
  dispatch(_deletePriceChangesRequest());

  try {
    const { data } = await axios.delete(`pricechanges/${id}`);

    dispatch(_deletePriceChangesSuccess());
    dispatch(_deletePriceChangesSet(data));
  } catch (error) {
    dispatch(_deletePriceChangesError(error));
  }
};
