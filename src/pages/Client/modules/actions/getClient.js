import axios from 'axios'
import { GET_CLIENT } from '../types'

/**
 * Request action
 * @returns {{type: string}}
 * @private
 */
const _getClientRequest = () => ({ type: GET_CLIENT.REQUEST })

/**
 * Success action
 * @returns {{type: string}}
 * @private
 */
const _getClientSuccess = () => ({
  type: GET_CLIENT.SUCCESS
})

/**
 * Set action
 * @param {Object} client
 * @return {{payload: {provider: Object, billing: Object}, type: string}}
 * @private
 */
const _getClientSet = client => ({
  type: GET_CLIENT.SET,
  payload: client
})

/**
 * Error action for getInitData
 * @param error
 * @returns {{type: string, error: _getClientError.props}}
 * @private
 */
const _getClientError = error => ({
  type: GET_CLIENT.FAILURE,
  error
})

/**
 * Trae los clientes
 * @returns {function(...[*]=)}
 */
export const getClient = id => async dispatch => {
  dispatch(_getClientRequest())

  try {
    const { data } = await axios(`clients/${id}`)

    dispatch(_getClientSuccess())
    dispatch(_getClientSet(data))
  } catch (error) {
    dispatch(_getClientError(error))
  }
}
