import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import account from 'reducers/account';
import { configureStore } from '../store';

/**
 * Provider of redux for storybook
 * @param {Array | Object} children
 * @param {Object} state
 * @return {Provider}
 * @constructor
 */
const ReduxProvider = ({ state, children }) => {
  const store = configureStore({
    ...state,
    account: {
      ...account,
      user: 'storybook',
    },
  });

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
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
