import axios from 'axios'
import { EDIT_NOTE } from '../types'

/**
 * Request action
 * @returns {{type: string}}
 * @private
 */
const _editNotesRequest = () => ({ type: EDIT_NOTE.REQUEST })

/**
 * Success action
 * @returns {{type: string}}
 * @private
 */
const _editNoteSuccess = () => ({
  type: EDIT_NOTE.SUCCESS,
  payload: {
    level: 'success',
    message: 'Nota actualizada'
  }
})

const _editNoteSet = ({ data }) => ({
  type: EDIT_NOTE.SET,
  payload: {
    notes: data
  }
})

/**
 * Error action
 * @param error
 * @returns {{type: string, error: _editNoteError.props}}
 * @private
 */
const _editNoteError = error => ({
  type: EDIT_NOTE.FAILURE,
  error
})

/**
 * Actualiza la nota
 * @param {String} id
 * @param {Object} data
 * @param {function} callback
 * @returns {function(...[*]=)}
 */
export const editNote = (id, data, callback) => async dispatch => {
  dispatch(_editNotesRequest())

  try {
    const response = await axios.put(`notes/${id}`, data)

    dispatch(_editNoteSuccess())
    dispatch(_editNoteSet(response))
    callback()
  } catch (error) {
    dispatch(_editNoteError(error))
  }
}
