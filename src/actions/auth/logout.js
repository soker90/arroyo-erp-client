import authService from 'services/authService';
import { LOGOUT } from 'actions/types';
import history from 'store/history';

export const logout = () => async dispatch => {
  await authService.logout();
  dispatch({ type: LOGOUT });
  history.push('/');
};
