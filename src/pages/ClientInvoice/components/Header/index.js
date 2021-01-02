import { useState } from 'react';
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';
import PropTypes from 'prop-types';

import { Header } from 'components';
import { PlusCircle as PlusCircleIcon, Trash2 } from 'react-feather';
import ConfirmInvoiceModal from '../../modals/ConfirmInvoiceModal';
import DeleteInvoiceModal from '../../modals/DeleteClientInvoiceModal';

const HeaderClientInvoice = ({
  client, nameClient, nInvoice, createDeliveryOrder, id,
}) => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const _handleClickNewOrder = () => {
    createDeliveryOrder(id);
  };

  return (
    <>
      <Header
        routes={[{
          link: '/app/clientes',
          title: 'Clientes',
        }, {
          link: `/app/clientes/${client}`,
          title: `${nameClient}`,
        },
        ]}
        title='Factura'
        description=''
        buttons={[{
          variant: 'outlined',
          color: 'default',
          onClick: () => setShowDeleteModal(true),
          Icon: Trash2,
          label: 'Eliminar',
        }, {
          variant: 'contained',
          color: 'secondary',
          onClick: () => setShowConfirmModal(true),
          Icon: CheckCircleOutlinedIcon,
          disableSvg: true,
          label: 'Confirmar',
          disabled: Boolean(nInvoice),
        }, {
          variant: 'contained',
          color: 'primary',
          onClick: _handleClickNewOrder,
          Icon: PlusCircleIcon,
          disableSvg: true,
          label: 'Nuevo albarán',
          disabled: Boolean(nInvoice),
        }]}
      />
      <ConfirmInvoiceModal show={showConfirmModal} setShow={setShowConfirmModal} />
      <DeleteInvoiceModal show={showDeleteModal} setShow={setShowDeleteModal} />
    </>
  );
};

HeaderClientInvoice.propTypes = {
  nameClient: PropTypes.string.isRequired,
  client: PropTypes.string.isRequired,
  nInvoice: PropTypes.string,
  createDeliveryOrder: PropTypes.func.isRequired,
  id: PropTypes.string,
};

HeaderClientInvoice.displayName = 'HeaderClientInvoice';

export default HeaderClientInvoice;
