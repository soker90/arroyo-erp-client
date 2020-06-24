import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { TableMaterial } from 'components';
import { useStyles } from './InvoicesTable.styles';

const InvoicesTable = ({ invoices, getInvoicesByProvider, idProvider }) => {
  const classes = useStyles();

  useEffect(() => {
    if (idProvider) getInvoicesByProvider(idProvider);
  }, [getInvoicesByProvider, idProvider]);

  return idProvider && (
    <TableMaterial
      className={classes.table}
      columns={[
        {
          title: 'Nº de Orden',
          field: 'nOrder',
        },
        {
          title: 'Fecha',
          field: 'dateInvoice',
        },
        {
          title: 'Importe',
          field: 'total',
        },
      ]}
      data={invoices}
    />
  );
};

InvoicesTable.propTypes = {
  invoices: PropTypes.array.isRequired,
  idProvider: PropTypes.string,
  getInvoicesByProvider: PropTypes.func.isRequired,
};

InvoicesTable.displayName = 'InvoicesTable';

export default memo(InvoicesTable);
