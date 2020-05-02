import axios from 'axios';
import {GET_PROVIDERS} from 'actions/types';

/**
 * Request action for getInitData
 * @returns {{type: string}}
 * @private
 */
const _getProvidersRequest = () => ({type: GET_PROVIDERS.REQUEST});

/**
 * Success action for getInitData
 * @param {Object} data
 * @returns {{type: (string|string), providers: {providers: []}}}
 * @private
 */
const _getProvidersSuccess = ({data}) => ({
  type: GET_PROVIDERS.SUCCESS,
  providers: {
    providers: data.getProviders,
  },
});

/**
 * Error action for getInitData
 * @param error
 * @returns {{type: string, error: _getProvidersError.props}}
 * @private
 */
const _getProvidersError = error => ({
  type: GET_PROVIDERS.FAILURE,
  error,
});

/**
 * Pide todos los datos necsearios para iniciar la aplicacion
 * una vez logueado
 * @returns {function(...[*]=)}
 */
export const getProviders = () => async dispatch => {
  dispatch(_getProvidersRequest());

  try {
    const {data} = await axios.post('',
      {
        query: `
          query { 
            getProviders {
              name
              _id
            }
          }`,
      },
    );

    if (data.errors) {
      dispatch(_getProvidersError(data.errors[0]));
      return;
    }

    dispatch(_getProvidersSuccess(data))
  } catch (error) {
    dispatch(_getProvidersError(error))
  }
};
