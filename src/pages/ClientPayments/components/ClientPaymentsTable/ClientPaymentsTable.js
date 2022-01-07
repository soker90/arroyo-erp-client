import { useState } from 'react';
import PropTypes from 'prop-types';
import EuroIcon from '@material-ui/icons/Euro';

import { TableMaterial, TextEuro } from 'components';
import { format } from 'utils';
import ConfirmPaymentModal from '../../modals/ConfirmPaymentModal';

import { useStyles } from './ClientPaymentsTable.styles';

const ClientPaymentsTable = ({ payments }) => {
  const classes = useStyles();
  const [payment, setPayment] = useState(null);

  const _handlePaymentButton = row => {
    setPayment(row);
  };

  return (
    <>
      <TableMaterial
        className={classes.table}
        columns={[
          {
            title: 'Nº de Factura',
            field: 'nInvoice',
          },
          {
            title: 'Fecha de factura',
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
        data={payments}
        actions={[
          {
            icon: EuroIcon,
            tooltip: 'Pagar',
            onClick: _handlePaymentButton,
          },
        ]}

      />
      <ConfirmPaymentModal payment={payment} setShow={setPayment} />

    </>
  );
};

ClientPaymentsTable.propTypes = {
  payments: PropTypes.array.isRequired,
};

ClientPaymentsTable.displayName = 'ClientPaymentsTable';

export default ClientPaymentsTable;
