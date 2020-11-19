import { createReducer, setPayload } from 'store/utils';
import {
  GET_CLIENT,
  GET_CLIENTS,
} from './types';

const INITIAL_STATE = {
  clients: [],
};

const ACTION_HANDLERS = {
  [GET_CLIENTS.SET]: setPayload,
  [GET_CLIENT.SET]: setPayload,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
