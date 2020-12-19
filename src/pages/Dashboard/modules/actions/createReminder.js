import axios from 'axios';
import { CREATE_REMINDER } from '../types';

/**
 * Request action
 * @returns {{type: string}}
 * @private
 */
const _createReminderRequest = () => ({ type: CREATE_REMINDER.REQUEST });

/**
 * Success action
 * @returns {{type: string}}
 * @private
 */
const _createReminderSuccess = () => ({
  type: CREATE_REMINDER.SUCCESS,
  payload: {
    level: 'success',
    message: 'Recordatorio creada',
  },
});

const _createReminderSet = ({ data }) => ({
  type: CREATE_REMINDER.SET,
  payload: data,
});

/**
 * Error action
 * @param error
 * @returns {{type: string, error: _createReminderError.props}}
 * @private
 */
const _createReminderError = error => ({
  type: CREATE_REMINDER.FAILURE,
  error,
});

/**
 * Crea un recordatorio
 * @param {Object} data
 * @param {function} callback
 * @returns {function(...[*]=)}
 */
export const createReminder = (data, callback) => async dispatch => {
  dispatch(_createReminderRequest());

  try {
    const response = await axios.post('dashboard/createReminder', data);

    dispatch(_createReminderSuccess());
    dispatch(_createReminderSet(response));
    callback();
  } catch (error) {
    dispatch(_createReminderError(error));
  }
};
