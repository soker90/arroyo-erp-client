import {GET_PROVIDER, GET_PROVIDERS} from './types';
import {createReducer, setPayload} from 'store/utils';

const INITIAL_STATE = {
  providers: [],
  provider: {},
};

const ACTION_HANLDERS = {
  [GET_PROVIDERS.SET]: setPayload,
  [GET_PROVIDER.SET]: setPayload,
};

export default createReducer(INITIAL_STATE, ACTION_HANLDERS);
