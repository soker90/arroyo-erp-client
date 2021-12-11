import VisibilityIcon from '@mui/icons-material/Visibility';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { memo } from 'react';

import { TableMaterial, TextEuro } from 'components';
import { BASE_PATH, INVOICE_COMMON_CONCEPTS } from 'constants/index';
import { format } from 'utils';
import { useStyles } from './InvoicesTable.styles';

const InvoicesTable = ({ invoices, count, setFilters }) => {
  const classes = useStyles();

  const _rowStyle = ({ concept }) => (INVOICE_COMMON_CONCEPTS.includes(concept) ? '' : classes.rowRed);

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
          title: 'Concepto',
          field: 'concept',
        },
        {
          title: 'Proveedor',
          field: 'businessName',
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
          to: ({ _id }) => `${BASE_PATH}/facturas/${_id}`,
        },
      ]}
      rowClass={_rowStyle}
      count={count}
      refresh={setFilters}
      rowsPerPageOptions={[100, 250, 500]}
    />
  );
};

InvoicesTable.propTypes = {
  invoices: PropTypes.array.isRequired,
  count: PropTypes.number,
  setFilters: PropTypes.func.isRequired,
};

InvoicesTable.displayName = 'InvoicesTable';

export default memo(InvoicesTable);
