import PropTypes from 'prop-types'
import { ConfirmModal } from 'components'

const DeleteProductModal = ({
  deleteProduct,
  product,
  close,
  ...rest
}) => {
  /**
   * Send email to the client for change password
   * @private
   */
  const _handleSend = () => {
    deleteProduct(
      product?._id
    )
    close()
  }

  return (
    <ConfirmModal
      show={!!product}
      {...rest}
      title='Eliminar producto'
      description={`¿Seguro que quieres eliminar el producto «${product?.name}»?`}
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
  setShow: PropTypes.func,
  product: PropTypes.object,
  deleteProduct: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired
}

DeleteProductModal.displayName = 'DeleteProductModal'
export const story = DeleteProductModal
export default DeleteProductModal
