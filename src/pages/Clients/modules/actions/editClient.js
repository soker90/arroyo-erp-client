import axios from 'axios'
import { EDIT_CLIENT } from '../types'
import { getClient } from './getClient'

/**
 * Request action
 * @returns {{type: string}}
 * @private
 */
const _editProviderRequest = () => ({ type: EDIT_CLIENT.REQUEST })

/**
 * Success action
 * @param {String} name
 * @returns {{type: string}}
 * @private
 */
const _editProviderSuccess = name => ({
  type: EDIT_CLIENT.SUCCESS,
  payload: {
    level: 'success',
    message: `${name} ha sido actualizado`
  }
})

/**
 * Error action
 * @param error
 * @returns {{type: string, error: _editProviderError.props}}
 * @private
 */
const _editProviderError = error => ({
  type: EDIT_CLIENT.FAILURE,
  error
})

/**
 * Editar cliente
 * @param {String} id
 * @param {Object} data
 * @param {function} callback
 */
export const editClient = (id, data, callback) => async dispatch => {
  dispatch(_editProviderRequest())

  try {
    await axios.put(`clients/${id}`, data)

    dispatch(_editProviderSuccess(data.name))
    // eslint-disable-next-line no-unused-expressions
    callback?.()
    dispatch(getClient(id))
  } catch (error) {
    dispatch(_editProviderError(error))
  }
}
