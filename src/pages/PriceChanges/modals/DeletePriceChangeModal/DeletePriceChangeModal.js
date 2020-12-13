import { memo } from 'react';
import PropTypes from 'prop-types';
import { ConfirmModal } from 'components/Modals';

const DeletePriceChangeModal = ({
  deletePriceChanges, id, ...rest
}) => {
  /**
   * Send email to the client for change password
   * @private
   */
  const _handleSend = () => {
    deletePriceChanges(id);
    rest.close();
  };

  return (
    <ConfirmModal
      {...rest}
      show={Boolean(id)}
      title='Borrar cambio de precio'
      description='¿Seguro que quieres quitar la notificación de cambio de precio?'
      action={_handleSend}
      actions={[
        { onClick: rest.close, value: 'Cerrar', 'data-cy': 'modal-close-button' },
        {
          onClick: _handleSend,
          color: 'secondary',
          variant: 'contained',
          value: 'Borrar',
          'data-cy': 'modal-close-button',
        },
      ]}
    />
  );
};

DeletePriceChangeModal.propTypes = {
  close: PropTypes.func,
  id: PropTypes.string,
  deletePriceChanges: PropTypes.func.isRequired,
};

DeletePriceChangeModal.displayName = 'DeletePriceChangeModal';
export const story = DeletePriceChangeModal;
export default memo(DeletePriceChangeModal);
