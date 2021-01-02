import { memo } from 'react';
import PropTypes from 'prop-types';
import { ConfirmModal } from 'components';
import { useHistory } from 'react-router';

const DeleteClientInvoiceModal = ({
  deleteClientInvoice,
  id,
  setShow,
  client,
  ...rest
}) => {
  const history = useHistory();

  const _close = () => {
    setShow(false);
  };

  const _handleSend = () => {
    deleteClientInvoice(
      id,
      () => history.push(`/app/clientes/${client}`)
    );
    _close();
  };

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

DeleteClientInvoiceModal.propTypes = {
  setShow: PropTypes.func,
  id: PropTypes.string.isRequired,
  deleteClientInvoice: PropTypes.func.isRequired,
  client: PropTypes.string,
};

DeleteClientInvoiceModal.displayName = 'DeleteInvoiceModal';
export const story = DeleteClientInvoiceModal;
export default memo(DeleteClientInvoiceModal);
