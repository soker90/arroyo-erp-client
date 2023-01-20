import PropTypes from 'prop-types'
import { ConfirmModal } from 'components'

const DeleteProductModal = ({
  deleteProduct,
  ...rest
}) => {
  return (
    <ConfirmModal
      {...rest}
      title='Eliminar producto'
      description='¿Seguro que quieres eliminar este producto? Se borrarán todas las subida de precios guardadas'
      action={deleteProduct}
      actions={[
        {
          variant: 'contained',
          color: 'primary',
          onClick: rest.close,
          value: 'Cerrar'
        },
        {
          onClick: deleteProduct,
          variant: 'contained',
          value: 'Eliminar'
        }
      ]}
    />
  )
}

DeleteProductModal.propTypes = {
  close: PropTypes.func,
  deleteProduct: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
}

export default DeleteProductModal
