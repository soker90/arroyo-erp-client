import { useEffect, useReducer } from 'react'
import PropTypes from 'prop-types'
import NoteModal, { INITIAL_STATE } from '../NoteModal'

const EditNoteModal = ({
  close, editNote, note
}) => {
  const [state, setState] = useReducer(
    (oldState, newState) => ({ ...oldState, ...newState }),
    INITIAL_STATE
  )

  useEffect(() => {
    if (note) setState(note)

    // eslint-disable-next-line
  }, [note]);

  /**
   * Handle event save button
   * @param {Object} data
   * @private
   */
  const _handleSubmit = data => {
    editNote(note._id, data, close)
  }

  return (
    <NoteModal
      show={Boolean(note)}
      close={close}
      title='Editar nota'
      action={_handleSubmit}
      state={state}
      setState={setState}
    />
  )
}

EditNoteModal.propTypes = {
  close: PropTypes.func.isRequired,
  editNote: PropTypes.func.isRequired,
  note: PropTypes.object
}

EditNoteModal.displayName = 'EditNoteModal'
export const story = EditNoteModal
export default EditNoteModal
