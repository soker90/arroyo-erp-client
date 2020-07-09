import React, { useState } from 'react';
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';
import PropTypes from 'prop-types';

import { Header } from 'components';
import ConfirmInvoiceModal from '../../modals/ConfirmInvoiceModal';

const HeaderInvoice = ({
  provider, nameProvider, nOrder,
}) => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  return (
    <>
      <Header
        routes={[{
          link: `/app/proveedores/${provider}`,
          title: `${nameProvider}`,
        },
        {
          link: `/app/proveedores/${provider}#Facturas`,
          title: 'Facturas',
        }]}
        title="Factura"
        description=""
        buttons={!nOrder && [{
          variant: 'contained',
          color: 'primary',
          onClick: () => setShowConfirmModal(true),
          Icon: CheckCircleOutlinedIcon,
          disableSvg: true,
          label: 'Confirmar',
        }]}
      />
      <ConfirmInvoiceModal show={showConfirmModal} setShow={setShowConfirmModal} />
    </>
  );
};

HeaderInvoice.propTypes = {
  nameProvider: PropTypes.string.isRequired,
  provider: PropTypes.string.isRequired,
  nOrder: PropTypes.number,
};

HeaderInvoice.displayName = 'HeaderInvoice';

export default HeaderInvoice;
