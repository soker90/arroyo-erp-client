import PropTypes from 'prop-types'
import { ConfirmModal } from 'components'

const DeleteInvoiceModal = ({
  deleteInvoice,
  setShow,
  ...rest
}) => {
  const _close = () => {
    setShow(false)
  }

  /**
   * Send email to the client for change password
   * @private
   */
  const _handleSend = () => {
    deleteInvoice()
    _close()
  }

  return (
    <ConfirmModal
      {...rest}
      close={_close}
      title='Eliminar factura'
      description='¿Seguro que quieres eliminar esta factura?'
      action={_handleSend}
      actions={[
        {
          variant: 'contained',
          color: 'primary',
          onClick: _close,
          value: 'Cerrar'
        },
        {
          onClick: _handleSend,
          variant: 'contained',
          color: 'error',
          value: 'Eliminar'
        }
      ]}
    />
  )
}

DeleteInvoiceModal.propTypes = {
  setShow: PropTypes.func,
  deleteInvoice: PropTypes.func.isRequired
}

export default DeleteInvoiceModal
