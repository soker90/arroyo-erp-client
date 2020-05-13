import {combineReducers} from 'redux';
import account from './account';
import providers from 'modules/providers';

const rootReducer = combineReducers({
  account,
  providers,
});

export default rootReducer;
