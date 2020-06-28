import { createReducer, setPayload } from 'store/utils';
import {
  GET_INVOICE,
} from './types';

const INITIAL_STATE = {

};

const ACTION_HANDLERS = {
  [GET_INVOICE.SET]: setPayload,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
