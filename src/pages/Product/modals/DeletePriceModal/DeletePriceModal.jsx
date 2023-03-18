import PropTypes from 'prop-types'
import { ConfirmModal } from 'components'
import { format } from 'utils'

const DeletePriceModal = ({
  deletePrice,
  show,
  ...rest
}) => {
  const handleClose = () => {
    deletePrice(show._id, rest.close)
  }

  return (
    <ConfirmModal
      {...rest}
      show={Boolean(show)}
      title='Eliminar producto'
      description={`¿Seguro que quieres el precio «${format.number(show.price)}€»?`}
      actions={[
        {
          onClick: handleClose,
          variant: 'contained',
          color: 'error',
          value: 'Eliminar'
        },
        {
          variant: 'contained',
          color: 'primary',
          onClick: rest.close,
          value: 'Cerrar'
        }
      ]}
    />
  )
}

DeletePriceModal.propTypes = {
  close: PropTypes.func,
  deletePrice: PropTypes.func.isRequired,
  show: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired
}

export default DeletePriceModal
