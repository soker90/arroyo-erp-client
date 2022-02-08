import authService from 'services/authService';
import { LOGOUT } from 'actions/types';

export const logout = navigate => async dispatch => {
  await authService.logout();
  dispatch({ type: LOGOUT });
  navigate('/');
};
