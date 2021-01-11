import axios from 'axios';
import { SEND_PRICES_TELEGRAM } from '../types';

/**
 * Request action
 * @returns {{type: string}}
 * @private
 */
const _sendTelegramPricesRequest = () => ({ type: SEND_PRICES_TELEGRAM.REQUEST });

/**
 * Success action
 * @returns {{type: string}}
 * @private
 */
const _sendTelegramPricesSuccess = () => ({
  type: SEND_PRICES_TELEGRAM.SUCCESS,
});

/**
 * Error action for getInitData
 * @param error
 * @returns {{type: string, error: _sendTelegramPricesError.props}}
 * @private
 */
const _sendTelegramPricesError = error => ({
  type: SEND_PRICES_TELEGRAM.FAILURE,
  error,
});

/**
 * Envía los precios al telegram
 * @param {Array} ids
 * @returns {function(...[*]=)}
 */
export const sendTelegramPrices = ids => async dispatch => {
  dispatch(_sendTelegramPricesRequest());

  try {
    await axios.post('pricechanges/send', { ids });

    dispatch(_sendTelegramPricesSuccess());
  } catch (error) {
    dispatch(_sendTelegramPricesError(error));
  }
};
