import { createReducer, setPayload } from 'store/utils';
import { GET_PROVIDERS } from './types';

const INITIAL_STATE = {
  providers: [],
};

const ACTION_HANDLERS = {
  [GET_PROVIDERS.SET]: setPayload,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
