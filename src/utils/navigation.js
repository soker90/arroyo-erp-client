/**
 * Navigate to path
 * @param {string} path
 */
export const navigateTo = (path, navigate) => {
  const BASE_PATH = import.meta.env.VITE_ROUTER_BASE_PATH;
  navigate(`${BASE_PATH}/${path}`);
};
