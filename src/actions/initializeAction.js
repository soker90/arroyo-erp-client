import {getProviders} from 'modules/providers/actions';

export const initialize = () => dispatch => {
  dispatch(getProviders());
};
