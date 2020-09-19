import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import EditIcon from '@material-ui/icons/Edit';
import { Link } from 'react-router-dom';

import { TableMaterial, TextEuro } from 'components';
import { BASE_PATH } from 'constants';
import { format } from 'utils';
import { useStyles } from './InvoicesTable.styles';

const InvoicesTable = ({ invoices, getInvoicesByProvider, idProvider }) => {
  const classes = useStyles();

  useEffect(() => {
    if (idProvider) getInvoicesByProvider(idProvider);
  }, [getInvoicesByProvider, idProvider]);

  /**
   * Render payment type
   * @param {object} payment
   * @returns {string|null}
   * @private
   */
  const _renderPaymentType = ({ payment }) => (payment?.paid ? payment.type : null);

  return idProvider && (
    <TableMaterial
      className={classes.table}
      columns={[
        {
          title: 'Nº de Orden',
          field: 'nOrder',
        },
        {
          title: 'Fecha de factura',
          render: ({ dateInvoice }) => format.date(dateInvoice),
        },
        {
          title: 'Nº de factura',
          field: 'nInvoice',
        },
        {
          title: 'Importe',
          render: ({ total }) => <TextEuro num={total} />,
        },
        {
          title: 'Pago',
          render: _renderPaymentType,
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
