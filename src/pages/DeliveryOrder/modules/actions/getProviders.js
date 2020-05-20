import axios from 'axios';
import {GET_PROVIDERS_NEW_PROVIDER} from 'actions/types';

/**
 * Request action for getPrivder
 * @returns {{type: string}}
 * @private
 */
const _getProvidersRequest = () => ({type: GET_PROVIDERS_NEW_PROVIDER.REQUEST});

/**
 * Success action for getPrivder
 * @param {Object} data
 * @returns {{type: (string|string), providers: {all: *}}}
 * @private
 */
const _getProvidersSuccess = ({data}) => ({
  type: GET_PROVIDERS_NEW_PROVIDER.SUCCESS,
  providers: {
    providers: data.getProviders,
  },
});

/**
 * Error action for getPrivder
 * @param error
 * @returns {{type: string, error: _getProvidersError.props}}
 * @private
 */
const _getProvidersError = error => ({
  type: GET_PROVIDERS_NEW_PROVIDER.FAILURE,
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
              _id
              name
            }
          }`,
      },
    );

    if (data.errors) {
      dispatch(_getProvidersError(data.errors[0]));
      return;
    }

    dispatch(_getProvidersSuccess(data));
  } catch (error) {
    console.log(error);
    dispatch(_getProvidersSuccess(error))
  }
};
