import { createReducer, setPayload } from 'store/utils';
import { GET_BILLING } from './types';

const INITIAL_STATE = {
  billing: [],
};

const ACTION_HANDLERS = {
  [GET_BILLING.SET]: setPayload,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
