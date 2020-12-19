import { createReducer, setPayload } from 'store/utils';
import { CREATE_REMINDER, DELETE_REMINDER, GET_DASHBOARD_INFO } from './types';

const INITIAL_STATE = {
  reminders: [],
};

const setReminders = (state, { payload: { reminders } }) => ({
  ...state,
  reminders,
});

const ACTION_HANDLERS = {
  [GET_DASHBOARD_INFO.SET]: setPayload,
  [CREATE_REMINDER.SET]: setReminders,
  [DELETE_REMINDER.SET]: setReminders,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
