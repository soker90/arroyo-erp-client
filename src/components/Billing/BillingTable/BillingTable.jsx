/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';

import { TableMaterial, TextEuro } from 'components';
import { useStyles } from './BillingTable.styles';

const BillingTable = ({
  billing,
  type,
}) => {
  const classes = useStyles();

  const renderCell = (
    trimester,
    invoices,
  ) => (
    <>
      <TextEuro num={trimester} />
      {' '}
      (
      {invoices}
      )
    </>
  );

  return (
    <TableMaterial
      className={classes.table}
      columns={[
        {
          title: type === 'clientes' ? 'Cliente' : 'Proveedor',
          field: 'name',
        },
        {
          title: 'Razón social',
          field: 'businessName',
        },
        {
          title: 'Trimestre 1',
          render: ({
            trimester1,
            invoices1,
          }) => renderCell(trimester1, invoices1),
        },
        {
          title: 'Trimestre 2',
          render: ({
            trimester2,
            invoices2,
          }) => renderCell(trimester2, invoices2),
        },
        {
          title: 'Trimestre 3',
          render: ({
            trimester3,
            invoices3,
          }) => renderCell(trimester3, invoices3),
        },
        {
          title: 'Trimestre 4',
          render: ({
            trimester4,
            invoices4,
          }) => renderCell(trimester4, invoices4),
        },
        {
          title: 'Anual',
          render: ({
            annual,
            annualInvoices,
          }) => renderCell(annual, annualInvoices),
        },
      ]}
      data={billing}
    />
  );
};

BillingTable.propTypes = {
  billing: PropTypes.array.isRequired,
};

export default BillingTable;
