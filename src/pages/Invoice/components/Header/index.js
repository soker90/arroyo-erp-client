import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';

import { Header } from 'components';

const HeaderInvoice = ({ provider, nameProvider, nOrder }) => (
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
    buttons={[
      ...(!nOrder && [{
        variant: 'contained',
        color: 'secondary',
        onClick: () => 'showAddProductModal',
        Icon: AddIcon,
        disableSvg: true,
        label: 'Confirmar',
      }]),
      {
        variant: 'contained',
        onClick: () => 'showAddProductModal',
        Icon: AddIcon,
        disableSvg: true,
        label: 'Añadir',
      },
    ]}
  />
);

HeaderInvoice.propTypes = {
  nameProvider: PropTypes.string.isRequired,
  provider: PropTypes.string.isRequired,
};

HeaderInvoice.displayName = 'HeaderInvoice';

export default HeaderInvoice;
