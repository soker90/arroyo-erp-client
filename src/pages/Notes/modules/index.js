import { createReducer } from 'store/utils';
import {
  CREATE_NOTE,
  DELETE_NOTE,
  EDIT_NOTE,
  GET_NOTES,
} from './types';

const INITIAL_STATE = {
  notes: [],
};

const setNotes = (state, { payload: { notes } }) => ({
  ...state,
  notes,
});

const ACTION_HANDLERS = {
  [GET_NOTES.SET]: setNotes,
  [CREATE_NOTE.SET]: setNotes,
  [EDIT_NOTE.SET]: setNotes,
  [DELETE_NOTE.SET]: setNotes,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
