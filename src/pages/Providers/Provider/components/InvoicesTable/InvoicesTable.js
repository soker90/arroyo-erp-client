import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import EditIcon from '@material-ui/icons/Edit';

import { TableMaterial } from 'components';
import { Link } from 'react-router-dom';
import { useStyles } from './InvoicesTable.styles';
import { BASE_PATH } from '../../../../../constants';

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
      actions={[
        {
          icon: EditIcon,
          tooltip: 'Editar',
          component: Link,
          to: ({ _id }) => `${BASE_PATH}/facturas/${_id}`,
        },
      ]}
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
