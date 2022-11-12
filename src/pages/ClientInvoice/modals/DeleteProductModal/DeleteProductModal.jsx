import PropTypes from 'prop-types'
import { ConfirmModal } from 'components'

const DeleteProductModal = ({
  deleteProduct,
  invoice,
  deliveryOrder,
  close,
  deleteId,
  ...rest
}) => {
  const _handleSend = () => {
    deleteProduct({
      invoice,
      deliveryOrder,
      product: deleteId
    })
    close()
  }

  return (
    <ConfirmModal
      {...rest}
      close={close}
      show={Boolean(deleteId)}
      title='Eliminar producto'
      description='¿Seguro que quieres eliminar este producto?'
      action={_handleSend}
      actions={[
        {
          variant: 'contained',
          color: 'primary',
          onClick: close,
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

DeleteProductModal.propTypes = {
  close: PropTypes.func,
  invoice: PropTypes.string,
  deleteProduct: PropTypes.func.isRequired,
  deliveryOrder: PropTypes.string,
  deleteId: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
}

export default DeleteProductModal
