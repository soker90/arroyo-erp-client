import React from 'react';
import {Provider} from 'react-redux';
import PropTypes from 'prop-types';
import {select} from '@storybook/addon-knobs';

import {configureStore} from '../store';
import {ROLE_ADMIN, userRoles} from '../utils';
import auth from '../reducers/auth';

/**
 * Provider of redux for storybook
 * @param {Array | Object} children
 * @param {Object} state
 * @return {Provider}
 * @constructor
 */
const ReduxProvider = ({state, children}) => {
  const role = select('Rol', Object.keys(userRoles), ROLE_ADMIN, 'General');

  const store = configureStore({
    ...state, auth: {
      ...auth,
      userPermissions: userRoles[role],
      userRole: role,
    },
  });

  return <Provider store={store}>
    {children}
  </Provider>
};

ReduxProvider.propTypes = {
  state: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

ReduxProvider.defaultProps = {
  state: {},
};
ReduxProvider.displayName = 'ReduxProvider';

export default ReduxProvider;
