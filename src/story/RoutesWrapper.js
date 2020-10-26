import { Router } from 'react-router-dom';
import PropTypes from 'prop-types';

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

RoutesWrapper.propTypes = {
  children: PropTypes.any,
};

RoutesWrapper.displayName = 'RoutesWrapper';

export default RoutesWrapper;
