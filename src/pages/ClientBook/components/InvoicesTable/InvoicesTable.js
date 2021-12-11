import { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';

import { TableMaterial, TextEuro } from 'components';
import { BASE_PATH } from 'constants/index';
import { format } from 'utils';
import { useStyles } from './InvoicesTable.styles';

const InvoicesTable = ({ invoices }) => {
  const classes = useStyles();

  return (
    <TableMaterial
      className={classes.table}
      columns={[
        {
          title: 'Nº de Factura',
          field: 'nInvoice',
        },
        {
          title: 'Fecha',
          render: ({ date }) => format.date(date),
        },
        {
          title: 'Cliente',
          field: 'nameClient',
        },
        {
          title: 'Importe',
          // eslint-disable-next-line react/prop-types
          render: ({ total }) => <TextEuro num={total} />,
        },
      ]}
      data={invoices}
      actions={[
        {
          icon: VisibilityIcon,
          tooltip: 'Ver',
          component: Link,
          to: ({ _id }) => `${BASE_PATH}/clientes/factura/${_id}`,
        },
      ]}
    />
  );
};

InvoicesTable.propTypes = {
  invoices: PropTypes.array.isRequired,
};

InvoicesTable.displayName = 'BillingTable';

export default memo(InvoicesTable);
