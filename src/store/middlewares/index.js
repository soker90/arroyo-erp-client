import {loadingBarMiddleware} from 'react-redux-loading-bar';
import thunkMiddleware from 'redux-thunk';

import notificationsMiddleware from './notifications';
import promiseTypeSuffixes from '../promise-type-suffixes';

export default [
  thunkMiddleware,
  notificationsMiddleware,
  loadingBarMiddleware({promiseTypeSuffixes}),
];
