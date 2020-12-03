import { memo } from 'react';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';

import { ConfirmModal } from 'components/Modals';

const DeleteDeliveryOrderModal = ({
  deleteDeliveryOrder,
  providerId,
  ...rest
}) => {
  const history = useHistory();
  /**
   * Send email to the client for change password
   * @private
   */
  const _handleSend = () => {
    deleteDeliveryOrder(
      () => history.push(`/app/proveedores/${providerId}`),
    );
    rest.close();
  };

  return (
    <ConfirmModal
      {...rest}
      title='Eliminar albarán'
      description='¿Seguro que quieres borrar este albarán?'
      action={_handleSend}
      actions={[
        {
          variant: 'contained',
          color: 'primary',
          onClick: rest.close,
          value: 'Cerrar',
        },
        {
          onClick: _handleSend,
          variant: 'contained',
          value: 'Eliminar',
        },
      ]}
    />
  );
};

DeleteDeliveryOrderModal.propTypes = {
  close: PropTypes.func,
  show: PropTypes.bool,
  deleteDeliveryOrder: PropTypes.func.isRequired,
  providerId: PropTypes.string.isRequired,
};

DeleteDeliveryOrderModal.displayName = 'DeleteConfirmationModal';
export const story = DeleteDeliveryOrderModal;
export default memo(DeleteDeliveryOrderModal);
