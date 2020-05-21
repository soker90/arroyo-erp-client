import authService from 'services/authService'
import {LOGIN} from 'actions/types'
import {initialize} from 'actions/initializeAction';

/**
 * Request action
 * @returns {{type: string}}
 * @private
 */
const _loginRequest = () => ({
  type: LOGIN.REQUEST,
})

/**
 * Success action
 * @returns {{type: string}}
 * @private
 */
const _loginSuccess = () => ({
  type: LOGIN.SUCCESS,
})

/**
 * Failure action
 * @param error
 * @returns {{type: string, error: Object}}
 * @private
 */
const _loginError = error => ({
  type: LOGIN.FAILURE,
  error,
  payload: {
    loginError: error?.response?.data?.message,
  },
})

/**
 * Set action
 * @param {Object} user
 * @returns {{payload: {user: Object}, type: string}}
 * @private
 */
const _loginSet = user => ({
  type: LOGIN.SET,
  payload: {
    user,
  },
})

/**
 * LayoutLogin in the system
 * @param {string} username
 * @param {string} password
 * @returns {function(...[*]=)}
 */
export const login = (username, password) => {
  return async dispatch => {
    try {
      dispatch(_loginRequest());

      const user = await authService.loginWithUsernameAndPassword(username, password);

      dispatch(_loginSuccess())
      dispatch(_loginSet(user))
      dispatch(initialize())
    } catch (error) {
      console.error(error)
      dispatch(_loginError(error));
    }
  };
}
