import { createReducer, setPayload } from 'store/utils';
import { EDIT_CLIENT, GET_CLIENT } from './types';

const INITIAL_STATE = {
  client: {},
};

const ACTION_HANDLERS = {
  [GET_CLIENT.SET]: setPayload,
  [EDIT_CLIENT.SET]: setPayload,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
