import {createReducer} from 'store/utils/create-reducer';

import {SHOW_MODAL, HIDE_MODAL} from 'actions/types';

// ------------------------------------
// Actions
// ------------------------------------

export const showModalAction = ({modalType, modalProps = {}}) => ({
  type: SHOW_MODAL,
  modalType,
  modalProps,
});

// ------------------------------------
// Functions
// ------------------------------------

export const showModal = ({modalType, modalProps}) => dispatch => dispatch(showModalAction({modalType, modalProps}));

export const close = () => dispatch => dispatch({type: HIDE_MODAL});

export const actions = {
  showModal,
  close,
};

// ------------------------------------
// Initial state
// ------------------------------------

const INITIAL_STATE = {
  modalType: null,
  modalProps: {},
  show: false,
};

// ------------------------------------
// Action Handlers
// ------------------------------------

const ACTION_HANDLERS = {
  [SHOW_MODAL]: (state, {modalType, modalProps}) => ({
    ...state, show: true, modalType, modalProps,
  }),
  [HIDE_MODAL]: state => ({...state, show: false}),
};

// ------------------------------------
// Reducer
// ------------------------------------

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
