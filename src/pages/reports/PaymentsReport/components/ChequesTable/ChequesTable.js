import { memo, useCallback } from 'react';
import PropTypes from 'prop-types';
import DescriptionIcon from '@material-ui/icons/Description';

import { TableMaterial, TextEuro } from 'components';
import { format, navigateTo } from 'utils';
import { useStyles } from './ChequesTable.styles';

const ChequesTable = ({
  cheques,
  count,
  getCheques,
  year,
}) => {
  const classes = useStyles();

  const _handleInvoiceButton = ({ _id }) => {
    navigateTo(`facturas/${_id}`);
  };

  const _refresh = useCallback(({
    offset,
    limit,
  }) => {
    getCheques({
      year,
      offset,
      limit,
    });
  }, [year]);
  return (
    <>
      <TableMaterial
        className={classes.table}
        columns={[
          {
            title: 'Nº de Cheque',
            render: ({ payment }) => payment.numCheque,
          },
          {
            title: 'Fecha de pago',
            render: ({ payment }) => format.date(payment.paymentDate),
          },
          {
            title: 'Proveedor',
            field: 'nameProvider',
          },
          {
            title: 'Nº Orden',
            field: 'nOrder',
          },
          {
            title: 'Importe',
            // eslint-disable-next-line react/prop-types
            render: ({ total }) => <TextEuro num={total} />,
          },
        ]}
        data={cheques}
        refresh={_refresh}
        count={count}
        actions={[
          {
            icon: DescriptionIcon,
            tooltip: 'Ver factura',
            onClick: _handleInvoiceButton,
          },
        ]}
      />
    </>
  );
};

ChequesTable.propTypes = {
  cheques: PropTypes.array.isRequired,
  count: PropTypes.number.isRequired,
  getCheques: PropTypes.func.isRequired,
  year: PropTypes.number,
};

ChequesTable.displayName = 'ChequesTable';

export default memo(ChequesTable);
