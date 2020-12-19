import axios from 'axios';
import { GET_DASHBOARD_INFO } from '../types';

/**
 * Request action
 * @returns {{type: string}}
 * @private
 */
const _getDashboardRequest = () => ({ type: GET_DASHBOARD_INFO.REQUEST });

/**
 * Success action
 * @returns {{type: string}}
 * @private
 */
const _getDashboardSuccess = () => ({
  type: GET_DASHBOARD_INFO.SUCCESS,
});

const _getDashboardSet = dashboard => ({
  type: GET_DASHBOARD_INFO.SET,
  payload: dashboard,
});

/**
 * Error action
 * @param error
 * @returns {{type: string, error: _getDashboardError.props}}
 * @private
 */
const _getDashboardError = error => ({
  type: GET_DASHBOARD_INFO.FAILURE,
  error,
});

/**
 * Pide los pagos pendientes de cobro
 * @returns {function(...[*]=)}
 */
export const getDashboard = () => async dispatch => {
  dispatch(_getDashboardRequest());

  try {
    const { data } = await axios('dashboard');

    dispatch(_getDashboardSuccess());
    dispatch(_getDashboardSet(data));
  } catch (error) {
    dispatch(_getDashboardError(error));
  }
};
