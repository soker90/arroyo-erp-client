import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EuroIcon from '@material-ui/icons/Euro';

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
          title: 'Fecha de cobro',
          render: ({ paymentDate }) => format.date(paymentDate),
        },
        {
          title: 'Proveedor',
          field: 'provider',
        },
        {
          title: 'Tipo',
          field: 'type',
        },
        {
          title: 'Importe',
          render: ({ amount }) => format.euro(amount),
        },
      ]}
      data={payments}
      actions={[
        {
          icon: EuroIcon,
          tooltip: 'Pagar',
          component: Link,
          to: ({ _id }) => `${BASE_PATH}/pagos/${_id}`,
        },
        {
          icon: VisibilityIcon,
          tooltip: 'Ver',
          component: Link,
          to: ({ _id }) => `${BASE_PATH}/pagos/${_id}`,
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
