import axios from 'axios'
import { CREATE_PROVIDER } from '../types'
import { getProviders } from 'modules/providers/actions/getProviders'

/**
 * Request action for createProviders
 * @returns {{type: string}}
 * @private
 */
const _createProviderRequest = () => ({ type: CREATE_PROVIDER.REQUEST })

/**
 * Success action for createProviders
 * @returns {{type: string}}
 * @private
 */
const _createProviderSuccess = () => ({
  type: CREATE_PROVIDER.SUCCESS,
  payload: {
    level: 'success',
    message: 'El proveedor se ha creado correctamente'
  }
})

/**
 * Error action for createClientInvoice
 * @param error
 * @returns {{type: string, error: _getProvidersError.props}}
 * @private
 */
const _createProviderError = error => ({
  type: CREATE_PROVIDER.FAILURE,
  error
})

/**
 * Crea un nuevo proveedor
 * @param {Object} provider
 * @param {function} callback
 */
export const createProvider = (provider, callback) => async dispatch => {
  dispatch(_createProviderRequest())

  try {
    await axios.post('providers', provider)

    dispatch(_createProviderSuccess())
    // eslint-disable-next-line no-unused-expressions
    callback?.()
    dispatch(getProviders())
  } catch (error) {
    dispatch(_createProviderError(error))
  }
}
