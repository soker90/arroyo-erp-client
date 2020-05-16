import {combineReducers} from 'redux';
import notifications from './notifications';
import modal from './modal';

import account from './account';
import providers from 'modules/providers';

const rootReducer = combineReducers({
  notifications,
  modal,
  account,
  providers,
});

export default rootReducer;
