import { useCallback } from 'react'
import PropTypes from 'prop-types'
import { ConfirmModal } from 'components'
import { useNavigate } from 'react-router'

const DeleteInvoiceModal = ({
  deleteClientInvoice,
  id,
  setShow,
  client,
  ...rest
}) => {
  const navigate = useNavigate()
  const _close = useCallback(() => {
    setShow(false)
  }, [setShow])

  const _handleSend = () => {
    deleteClientInvoice(id, () => {
      navigate(`/app/clientes/${client}`, { replace: true })
    })
    _close()
  }

  return (
    <ConfirmModal
      {...rest}
      close={_close}
      title='Eliminar producto'
      description='¿Seguro que quieres eliminar este producto?'
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
  id: PropTypes.string,
  deleteClientInvoice: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  client: PropTypes.string.isRequired
}

DeleteInvoiceModal.displayName = 'DeleteProductModal'
export const story = DeleteInvoiceModal
export default DeleteInvoiceModal
