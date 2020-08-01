import { createReducer, setPayload } from 'store/utils';
import { GET_PAYMENTS } from './types';

const INITIAL_STATE = {
  payments: [],
};

const ACTION_HANDLERS = {
  [GET_PAYMENTS.SET]: setPayload,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
