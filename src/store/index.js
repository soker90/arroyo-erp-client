/* eslint-disable import/prefer-default-export */
import {applyMiddleware, createStore, compose} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createLogger} from 'redux-logger';

import rootReducer from 'reducers';
import middlewares from './middlewares';
import {ENABLE_REDUX_LOGGER} from 'config';

const loggerMiddleware = createLogger();

export function configureStore(preloadedState = {}) {

  if (ENABLE_REDUX_LOGGER) {
    middlewares.push(loggerMiddleware);
  }

  const middlewareEnhancer = composeWithDevTools(
    applyMiddleware(...middlewares)
  );

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = compose(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  return store;
}
