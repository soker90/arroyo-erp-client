import { createReducer } from 'store/utils';
import {
  GET_NOTES,
} from './types';

const INITIAL_STATE = {
  notes: [],
};

const ACTION_HANDLERS = {
  [GET_NOTES.SET]: (state, { payload: { notes } }) => ({
    ...state,
    notes,
  }),
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
