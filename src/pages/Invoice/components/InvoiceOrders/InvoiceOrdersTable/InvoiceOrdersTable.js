import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { format } from 'utils';
import { TableMaterial } from 'components';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

const InvoiceOrdersTable = ({ products }) => {
  const classes = useStyles();

  /**
   * Render message for delivery orders without products
   * @return {Typography}
   * @private
   */
  const _renderNoProducts = () => (
    <Typography color="textSecondary">
      No hay productos
    </Typography>
  );

  const _renderTable = () => (
    <TableMaterial
      className={classes.root}
      columns={[
        {
          title: 'Producto',
          field: 'name',
        },
        {
          title: 'Cantidad / Peso',
          render: ({ quantity }) => format.number(quantity),
        },
        {
          title: 'Precio',
          render: ({ price }) => format.euro(price),
        },
        {
          title: 'Total',
          render: ({ total }) => format.euro(total),
        },
      ]}
      data={products}
      withCard={false}
    />
  );

  return products?.length ? _renderTable() : _renderNoProducts();
};

InvoiceOrdersTable.propTypes = {
  products: PropTypes.array,
};

InvoiceOrdersTable.displayName = 'NoInvoicesTable';
export const story = InvoiceOrdersTable;
export default memo(InvoiceOrdersTable);
