import PropTypes from 'prop-types'
import { ConfirmModal } from 'components/Modals'

const DeleteConfirmationModal = ({
  deleteReminder, id, ...rest
}) => {
  /**
   * Send email to the client for change password
   * @private
   */
  const _handleSend = () => {
    deleteReminder(id)
    rest.close()
  }

  return (
    <ConfirmModal
      {...rest}
      show={Boolean(id)}
      title='Eliminar recordatorio'
      description='¿Seguro que quieres quitar el recordatorio?'
      action={_handleSend}
      actions={[
        { onClick: rest.close, value: 'Cerrar', 'data-cy': 'modal-close-button' },
        {
          onClick: _handleSend,
          color: 'secondary',
          variant: 'contained',
          value: 'Eliminar',
          'data-cy': 'modal-close-button'
        }
      ]}
    />
  )
}

DeleteConfirmationModal.propTypes = {
  close: PropTypes.func,
  id: PropTypes.string,
  deleteReminder: PropTypes.func.isRequired
}

DeleteConfirmationModal.displayName = 'DeleteConfirmationModal'
export const story = DeleteConfirmationModal
export default DeleteConfirmationModal
