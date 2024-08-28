import PropTypes from 'prop-types'

import { ConfirmModal } from 'components/Modals'

const DeleteNoteModal = ({
  deleteNote, id, close
}) => {
  /**
   * Send email to the client for change password
   * @private
   */
  const _handleSend = () => {
    deleteNote(id, close)
  }

  return (
    <ConfirmModal
      show={Boolean(id)}
      close={close}
      title='Eliminar nota'
      description='¿Seguro que quieres eliminar la nota?'
      action={_handleSend}
      actions={[
        {
          onClick: close,
          value: 'Cerrar',
          'data-cy': 'modal-close-button',
          variant: 'ghost'
        },
        {
          onClick: _handleSend,
          color: 'error',
          variant: 'contained',
          value: 'Eliminar',
          'data-cy': 'modal-close-button'
        }
      ]}
    />
  )
}

DeleteNoteModal.propTypes = {
  close: PropTypes.func,
  id: PropTypes.string,
  deleteNote: PropTypes.func.isRequired
}
export default DeleteNoteModal
