import React, { memo, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';

import { format } from 'utils';
import NoteModal, { INITIAL_STATE } from '../NoteModal';

const NewNoteModal = ({
  show, close, createNote,
}) => {
  const [state, setState] = useReducer(
    (oldState, newState) => ({ ...oldState, ...newState }),
    INITIAL_STATE,
  );

  useEffect(() => {
    if (!show) setState(INITIAL_STATE);
  }, [show]);

  /**
   * Handle event save button
   * @private
   */
  const _handleSubmit = data => {
    const model = {
      ...data,
      date: format.dateToSend(data.date),
    };
    createNote(model, close);
  };

  return (
    <NoteModal
      show={show}
      close={close}
      title='Crear nota'
      action={_handleSubmit}
      state={state}
      setState={setState}
    />
  );
};

NewNoteModal.propTypes = {
  show: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  createNote: PropTypes.func.isRequired,
};

NewNoteModal.displayName = 'NewNoteModal';
export const story = NewNoteModal;
export default memo(NewNoteModal);
