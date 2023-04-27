import PropTypes from 'prop-types'
import { ConfirmModal } from 'components/Modals'

const DeleteConfirmationModal = ({
  deleteProductOfDeliveryOrder, index, ...rest
}) => {
  /**
   * Send email to the client for change password
   * @private
   */
  const _handleSend = () => {
    deleteProductOfDeliveryOrder(index)
    rest.close()
  }

  return (
    <ConfirmModal
      {...rest}
      title='Eliminar producto del albarán'
      description='¿Seguro que quieres quitar el producto del albarán?'
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
  show: PropTypes.bool,
  index: PropTypes.number,
  deleteProductOfDeliveryOrder: PropTypes.func.isRequired
}

export default DeleteConfirmationModal
