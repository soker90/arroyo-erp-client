import axios from 'axios'
import { getClients } from './getClients'
import { CREATE_CLIENTS } from '../types'

/**
 * Request action for createProviders
 * @returns {{type: string}}
 * @private
 */
const _createClientRequest = () => ({ type: CREATE_CLIENTS.REQUEST })

/**
 * Success action for createProviders
 * @returns {{type: string}}
 * @private
 */
const _createClientSuccess = () => ({
  type: CREATE_CLIENTS.SUCCESS,
  payload: {
    level: 'success',
    message: 'El cliente se ha creado correctamente'
  }
})

/**
 * Error action for createClientInvoice
 * @param error
 * @returns {{type: string, error: _getProvidersError.props}}
 * @private
 */
const _createClientError = error => ({
  type: CREATE_CLIENTS.FAILURE,
  error
})

/**
 * Crea un nuevo cliente
 * @param {Object} client
 * @param {function} callback
 */
export const createClient = (client, callback) => async dispatch => {
  dispatch(_createClientRequest())
  try {
    await axios.post('clients', client)

    dispatch(_createClientSuccess())
    // eslint-disable-next-line no-unused-expressions
    callback?.()
    dispatch(getClients())
  } catch (error) {
    dispatch(_createClientError(error))
  }
}
