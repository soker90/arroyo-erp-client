/* eslint-disable no-unused-expressions */

import PropTypes from 'prop-types'
import { ConfirmModal } from 'components/Modals'

const DeletePriceChangeModal = ({
  deletePriceChanges,
  deleteManyChangesPrice,
  id,
  show,
  ids,
  ...rest
}) => {
  /**
   * Send email to the client for change password
   * @private
   */
  const _handleSend = () => {
    id
      ? deletePriceChanges(id)
      : deleteManyChangesPrice(ids)
    rest.close()
  }

  return (
    <ConfirmModal
      {...rest}
      show={Boolean(id || show)}
      title='Borrar cambio de precio'
      description='¿Seguro que quieres quitar la/s notificación/es de cambio de precio seleccionadas?'
      action={_handleSend}
      actions={[
        {
          onClick: rest.close,
          value: 'Cerrar',
          'data-cy': 'modal-close-button'
        },
        {
          onClick: _handleSend,
          color: 'secondary',
          variant: 'contained',
          value: 'Borrar',
          'data-cy': 'modal-close-button'
        }
      ]}
    />
  )
}

DeletePriceChangeModal.propTypes = {
  close: PropTypes.func,
  id: PropTypes.string,
  deletePriceChanges: PropTypes.func.isRequired,
  ids: PropTypes.array,
  deleteManyChangesPrice: PropTypes.func.isRequired,
  show: PropTypes.bool
}

DeletePriceChangeModal.displayName = 'DeletePriceChangeModal'
export const story = DeletePriceChangeModal
export default DeletePriceChangeModal
