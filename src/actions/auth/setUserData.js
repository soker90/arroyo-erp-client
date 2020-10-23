import { SILENT_LOGIN } from 'actions/types';

export const setUserData = user => dispatch => (
  dispatch({
    type: SILENT_LOGIN,
    payload: {
      user,
    },
  })
);
