import { createReducer } from 'store/utils';
import { GET_CASH, GET_CHEQUES } from './types';

const INITIAL_STATE = {
  cash: {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    total: 0,
  },
  cheques: [],
  countCheques: 0,
};

const setCash = (state, { payload: { cash } }) => ({
  ...state,
  cash,
});

const setCheques = (state, { payload: { cheques, count } }) => ({
  ...state,
  cheques,
  countCheques: count,
});

const ACTION_HANDLERS = {
  [GET_CHEQUES.SET]: setCheques,
  [GET_CASH.SET]: setCash,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
