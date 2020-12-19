import axios from 'axios';
import { DELETE_REMINDER } from '../types';

/**
 * Request action
 * @returns {{type: string}}
 * @private
 */
const _deleteReminderRequest = () => ({ type: DELETE_REMINDER.REQUEST });

/**
 * Success action
 * @returns {{type: string}}
 * @private
 */
const _deleteReminderSuccess = () => ({
  type: DELETE_REMINDER.SUCCESS,
  payload: {
    level: 'success',
    message: 'Recordatorio borrado',
  },
});

const _deleteReminderSet = ({ data }) => ({
  type: DELETE_REMINDER.SET,
  payload: {
    notes: data,
  },
});

/**
 * Error action
 * @param error
 * @returns {{type: string, error: _deleteReminderError.props}}
 * @private
 */
const _deleteReminderError = error => ({
  type: DELETE_REMINDER.FAILURE,
  error,
});

/**
 * Elimina un recordatorio
 * @param {String} id
 * @param {function} callback
 * @returns {function(...[*]=)}
 */
export const deleteReminder = (id, callback) => async dispatch => {
  dispatch(_deleteReminderRequest());

  try {
    const response = await axios.delete(`dashboard/deleteReminder/${id}`);

    dispatch(_deleteReminderSuccess());
    dispatch(_deleteReminderSet(response));
    callback();
  } catch (error) {
    dispatch(_deleteReminderError(error));
  }
};
