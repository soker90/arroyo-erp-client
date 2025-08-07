import { MemoryRouter, Route, Router } from 'react-router'
import PropTypes from 'prop-types'

import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

const WithRoute = ({
  route,
  children,
  path
}) => (
  <MemoryRouter initialEntries={[path]}>
    <Route path={route}>
      {children}
    </Route>
  </MemoryRouter>
)

WithRoute.propTypes = {
  children: PropTypes.any,
  route: PropTypes.string,
  path: PropTypes.string
}

/**
 * Wrapper for routes with storybook
 * @param children
 * @return {Router}
 * @constructor
 */

const RoutesWrapper = ({
  children,
  route,
  path
}) => (
  <Router navigator={history} location={history.location}>
    {route
      ? (
        <WithRoute route={route} path={path}>
          {children}
        </WithRoute>
        )
      : children}
  </Router>
)

RoutesWrapper.propTypes = {
  children: PropTypes.any,
  route: PropTypes.string,
  path: PropTypes.string
}

RoutesWrapper.displayName = 'RoutesWrapper'

export default RoutesWrapper
