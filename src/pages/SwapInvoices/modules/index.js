import { createReducer, setPayload } from 'store/utils';
import {
  SWAP_INVOICES,
} from './types';

const INITIAL_STATE = {};

const ACTION_HANDLERS = {};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
