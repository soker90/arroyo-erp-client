import browserHistory from 'store/history';

/**
 * Navigate to path
 * @param {string} path
 */
export const navigateTo = path => {
  const BASE_PATH = process.env.REACT_APP_ROUTER_BASE_PATH;
  browserHistory.push(`${BASE_PATH}/${path}`);
};
