import PropTypes from 'prop-types'
import { ConfirmModal } from 'components'
import { useNavigate } from 'react-router'

const DeleteInvoiceModal = ({
  deleteInvoice,
  id,
  setShow,
  providerId,
  ...rest
}) => {
  const navigate = useNavigate()

  const _close = () => {
    setShow(false)
  }

  /**
   * Send email to the client for change password
   * @private
   */
  const _handleSend = () => {
    deleteInvoice(
      id,
      () => navigate(`/app/proveedores/${providerId}#Facturas`)
    )
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
          value: 'Eliminar'
        }
      ]}
    />
  )
}

DeleteInvoiceModal.propTypes = {
  setShow: PropTypes.func,
  id: PropTypes.string.isRequired,
  deleteInvoice: PropTypes.func.isRequired,
  providerId: PropTypes.string
}

DeleteInvoiceModal.displayName = 'DeleteInvoiceModal'
export const story = DeleteInvoiceModal
export default DeleteInvoiceModal
