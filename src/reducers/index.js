import {combineReducers} from 'redux';
import account from './account';
import providers from 'modules/providers';
import modal from './modal';

const rootReducer = combineReducers({
  account,
  providers,
  modal,
});

export default rootReducer;
