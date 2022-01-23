/* eslint-disable react/prop-types */

import PropTypes from 'prop-types';
import { makeStyles } from 'tss-react/mui';
import { Typography } from '@mui/material';

import { TableMaterial, TextEuro } from 'components';
import { format } from 'utils';

const useStyles = makeStyles()({
  root: {
    width: '100%',
  },
});

const ProductsOrderTable = ({ products }) => {
  const classes = useStyles();

  /**
   * Render message for delivery orders without products
   * @return {Typography}
   * @private
   */
  const _renderNoProducts = () => (
    <Typography color='textSecondary'>
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
          render: ({ price }) => <TextEuro num={price} />,
        },
        {
          title: 'Base imponible',
          render: ({ taxBase }) => <TextEuro num={taxBase} />,
        },
      ]}
      data={products}
      withCard={false}
    />
  );

  return products?.length ? _renderTable() : _renderNoProducts();
};

ProductsOrderTable.propTypes = {
  products: PropTypes.array,
};

ProductsOrderTable.displayName = 'ProductsOrderTable';
export const story = ProductsOrderTable;
export default ProductsOrderTable;
