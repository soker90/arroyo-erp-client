import axios from 'axios'
import { GET_NOTES } from '../types'

/**
 * Request action
 * @returns {{type: string}}
 * @private
 */
const _getNotesRequest = () => ({ type: GET_NOTES.REQUEST })

/**
 * Success action
 * @returns {{type: string}}
 * @private
 */
const _getNotesSuccess = () => ({
  type: GET_NOTES.SUCCESS
})

const _getNotesSet = notes => ({
  type: GET_NOTES.SET,
  payload: {
    notes
  }
})

/**
 * Error action
 * @param error
 * @returns {{type: string, error: _getNotesError.props}}
 * @private
 */
const _getNotesError = error => ({
  type: GET_NOTES.FAILURE,
  error
})

/**
 * Pide los pagos pendientes de cobro
 * @param {string} year
 * @returns {function(...[*]=)}
 */
export const getNotes = year => async dispatch => {
  dispatch(_getNotesRequest())

  try {
    const { data } = await axios(`notes?year=${year}`)

    dispatch(_getNotesSuccess())
    dispatch(_getNotesSet(data))
  } catch (error) {
    dispatch(_getNotesError(error))
  }
}
