import axios from 'axios';
import { DELETE_NOTE } from '../types';

/**
 * Request action
 * @returns {{type: string}}
 * @private
 */
const _deleteNoteRequest = () => ({ type: DELETE_NOTE.REQUEST });

/**
 * Success action
 * @returns {{type: string}}
 * @private
 */
const _deleteNoteSuccess = () => ({
  type: DELETE_NOTE.SUCCESS,
  payload: {
    level: 'success',
    message: 'Nota borrada',
  },
});

const _deleteNoteSet = ({ data }) => ({
  type: DELETE_NOTE.SET,
  payload: {
    notes: data,
  },
});

/**
 * Error action
 * @param error
 * @returns {{type: string, error: _deleteNoteError.props}}
 * @private
 */
const _deleteNoteError = error => ({
  type: DELETE_NOTE.FAILURE,
  error,
});

/**
 * Crea una nota
 * @param {String} id
 * @param {function} callback
 * @returns {function(...[*]=)}
 */
export const deleteNote = (id, callback) => async dispatch => {
  dispatch(_deleteNoteRequest());

  try {
    const response = await axios.delete(`notes/${id}`);

    dispatch(_deleteNoteSuccess());
    dispatch(_deleteNoteSet(response));
    callback();
  } catch (error) {
    dispatch(_deleteNoteError(error));
  }
};
