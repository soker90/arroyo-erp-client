import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import VisibilityIcon from '@material-ui/icons/Visibility';

import { TableMaterial } from 'components';
import { BASE_PATH } from 'constants/index';
import { format } from 'utils';
import { useStyles } from './PaymentsTable.styles';

const PaymentsTable = ({ payments }) => {
  const classes = useStyles();

  return (
    <TableMaterial
      className={classes.table}
      columns={[
        {
          title: 'Nº de Orden',
          field: 'nOrder',
        },
        {
          title: 'Fecha de registro',
          render: ({ dateRegister }) => format.date(dateRegister),
        },
        {
          title: 'Fecha de factura',
          render: ({ dateInvoice }) => format.date(dateInvoice),
        },
        {
          title: 'Nº de Factura',
          field: 'nInvoice',
        },
        {
          title: 'Proveedor',
          field: 'nameProvider',
        },
        {
          title: 'Importe',
          render: ({ total }) => format.euro(total),
        },
      ]}
      data={payments}
      actions={[
        {
          icon: VisibilityIcon,
          tooltip: 'Ver',
          component: Link,
          to: ({ _id }) => `${BASE_PATH}/facturas/${_id}`,
        },
      ]}
    />
  );
};

PaymentsTable.propTypes = {
  payments: PropTypes.array.isRequired,
};

PaymentsTable.displayName = 'PaymentsTable';

export default memo(PaymentsTable);
