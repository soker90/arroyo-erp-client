import {GET_PROVIDERS} from './types';
import {createReducer, setPayload} from 'store/utils';

const INITIAL_STATE = {
  providers: [],
};

const ACTION_HANLDERS = {
  [GET_PROVIDERS.SET]: setPayload,
};

export default createReducer(INITIAL_STATE, ACTION_HANLDERS);
