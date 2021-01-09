import axios from 'axios';
import { GET_DO_COUNT } from '../types';

/**
 * Request action
 * @returns {{type: string}}
 * @private
 */
const _getDeliveryOrderCountRequest = () => ({ type: GET_DO_COUNT.REQUEST });

/**
 * Success action
 * @returns {{type: string}}
 * @private
 */
const _getDeliveryOrderCountSuccess = () => ({
  type: GET_DO_COUNT.SUCCESS,
});

const _getDeliveryOrderCountSet = doCount => ({
  type: GET_DO_COUNT.SET,
  payload: {
    doCount,
  },
});

/**
 * Error action
 * @param error
 * @returns {{type: string, error: _getDeliveryOrderCountError.props}}
 * @private
 */
const _getDeliveryOrderCountError = error => ({
  type: GET_DO_COUNT.FAILURE,
  error,
});

/**
 * Trae la cuenta de albaranes sin factura
 * @param {String} year
 * @returns {function(...[*]=)}
 */
export const getDeliveryOrderCount = year => async dispatch => {
  dispatch(_getDeliveryOrderCountRequest());

  try {
    const { data } = await axios(`deliveryorders/countfree/${year}`);

    dispatch(_getDeliveryOrderCountSuccess());
    dispatch(_getDeliveryOrderCountSet(data));
  } catch (error) {
    dispatch(_getDeliveryOrderCountError(error));
  }
};
