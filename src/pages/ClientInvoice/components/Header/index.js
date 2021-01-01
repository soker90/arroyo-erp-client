import { useState } from 'react';
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';
import PropTypes from 'prop-types';

import { Header } from 'components';
import { Trash2 } from 'react-feather';
import ConfirmInvoiceModal from '../../modals/ConfirmInvoiceModal';
import DeleteInvoiceModal from '../../modals/DeleteInvoiceModal';

const HeaderClientInvoice = ({
  client, nameClient, nInvoice,
}) => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
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
          color: 'primary',
          onClick: () => setShowConfirmModal(true),
          Icon: CheckCircleOutlinedIcon,
          disableSvg: true,
          label: 'Confirmar',
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
};

HeaderClientInvoice.displayName = 'HeaderClientInvoice';

export default HeaderClientInvoice;
