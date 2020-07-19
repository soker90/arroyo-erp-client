import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { ConfirmModal } from 'components/Modals';

const ConfirmInvoiceModal = ({
  confirmInvoice, id, setShow, ...rest
}) => {
  const _close = () => {
    setShow(false);
  };

  const _handleSend = () => {
    confirmInvoice(id);
    _close();
  };

  return (
    <ConfirmModal
      {...rest}
      title='Confirmación de factura'
      description='Al aceptar confirmarás la factura y no permitirá realizar mas modificaciones'
      action={_handleSend}
      actions={[
        {
          onClick: _close,
          value: 'Cerrar',
          'data-cy': 'modal-close-button',
        },
        {
          onClick: _handleSend,
          color: 'secondary',
          variant: 'contained',
          value: 'Confirmar',
          'data-cy': 'modal-close-button',
        },
      ]}
    />
  );
};

ConfirmInvoiceModal.propTypes = {
  setShow: PropTypes.func,
  id: PropTypes.string.isRequired,
  confirmInvoice: PropTypes.func.isRequired,
};

ConfirmInvoiceModal.displayName = 'ConfirmInvoiceModal';
export const story = ConfirmInvoiceModal;
export default memo(ConfirmInvoiceModal);
