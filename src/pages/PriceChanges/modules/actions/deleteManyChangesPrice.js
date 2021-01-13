import axios from 'axios';
import { DELETE_MANY_PRICE_CHANGES } from '../types';

/**
 * Request action
 * @returns {{type: string}}
 * @private
 */
const _deleteManyChangesPriceRequest = () => ({ type: DELETE_MANY_PRICE_CHANGES.REQUEST });

/**
 * Success action
 * @returns {{type: string}}
 * @private
 */
const _deleteManyChangesPriceSuccess = () => ({
  type: DELETE_MANY_PRICE_CHANGES.SUCCESS,
});

const _deleteManyChangesPriceSet = ({
  priceChanges,
  count,
}) => ({
  type: DELETE_MANY_PRICE_CHANGES.SET,
  payload: {
    priceChanges,
    count,
  },
});

/**
 * Error action for getInitData
 * @param error
 * @returns {{type: string, error: _deleteManyChangesPriceError.props}}
 * @private
 */
const _deleteManyChangesPriceError = error => ({
  type: DELETE_MANY_PRICE_CHANGES.FAILURE,
  error,
});

/**
 * Envía los precios al telegram
 * @param {Array} ids
 * @returns {function(...[*]=)}
 */
export const deleteManyChangesPrice = ids => async dispatch => {
  dispatch(_deleteManyChangesPriceRequest());

  try {
    const { data } = await axios.post('pricechanges/deletemany', { ids });

    dispatch(_deleteManyChangesPriceSuccess());
    dispatch(_deleteManyChangesPriceSet(data));
  } catch (error) {
    dispatch(_deleteManyChangesPriceError(error));
  }
};
