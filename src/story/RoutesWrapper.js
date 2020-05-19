import React from 'react';
import history from '../redux/history';
import {Router} from 'react-router-dom';
import ThemeWrapper from './ThemeWrapper';

/**
 * Wrapper for routes with storybook
 * @param children
 * @return {ThemeProvider}
 * @constructor
 */

const RoutesWrapper = ({children, theme}) =>
  <ThemeWrapper theme={theme}>
    <Router history={history}>
      {children}
    </Router>
  </ThemeWrapper>

RoutesWrapper.displayName = 'RoutesWrapper';

export default RoutesWrapper;
