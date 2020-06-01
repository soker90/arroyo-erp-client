import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { TableMaterial } from 'components';
import { useStyles } from './InvoicesTable.styles';

const InvoicesTable = ({ invoices, getInvoices, idProvider }) => {
  const classes = useStyles();

  useEffect(() => {
    if (idProvider) getInvoices(idProvider);
  }, [getInvoices, idProvider]);

  return idProvider && (
    <TableMaterial
      className={classes.table}
      columns={[
        {
          title: 'Código',
          field: 'code',
        },
        {
          title: 'Nombre',
          field: 'name',
        },
      ]}
      data={invoices}
    />
  );
};

InvoicesTable.propTypes = {
  invoices: PropTypes.array.isRequired,
  idProvider: PropTypes.string,
  getInvoices: PropTypes.func.isRequired,
};

InvoicesTable.displayName = 'InvoicesTable';

export default memo(InvoicesTable);
