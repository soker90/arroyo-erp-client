import axios from 'axios';
import { CREATE_NOTE } from '../types';

/**
 * Request action
 * @returns {{type: string}}
 * @private
 */
const _createNoteRequest = () => ({ type: CREATE_NOTE.REQUEST });

/**
 * Success action
 * @returns {{type: string}}
 * @private
 */
const _createNoteSuccess = () => ({
  type: CREATE_NOTE.SUCCESS,
  payload: {
    level: 'success',
    message: 'Nota creada',
  },
});

const _createNoteSet = ({ data }) => ({
  type: CREATE_NOTE.SET,
  payload: {
    notes: data,
  },
});

/**
 * Error action
 * @param error
 * @returns {{type: string, error: _createNoteError.props}}
 * @private
 */
const _createNoteError = error => ({
  type: CREATE_NOTE.FAILURE,
  error,
});

/**
 * Crea una nota
 * @param {Object} data
 * @param {function} callback
 * @returns {function(...[*]=)}
 */
export const createNote = (data, callback) => async dispatch => {
  dispatch(_createNoteRequest());

  try {
    const response = await axios.post('notes', data);

    dispatch(_createNoteSuccess());
    dispatch(_createNoteSet(response));
    callback();
  } catch (error) {
    dispatch(_createNoteError(error));
  }
};
