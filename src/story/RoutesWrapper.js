import React from 'react';
import { Router } from 'react-router-dom';
import history from '../store/history';

/**
 * Wrapper for routes with storybook
 * @param children
 * @return {Router}
 * @constructor
 */

const RoutesWrapper = ({ children }) => (
  <Router history={history}>
    {children}
  </Router>
);

RoutesWrapper.displayName = 'RoutesWrapper';

export default RoutesWrapper;
