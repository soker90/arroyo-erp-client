import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {Typography} from '@material-ui/core';

import {TableMaterial} from 'components';
import {format} from 'utils';
import {diffColor} from './utils';
import {useStyles} from './DeliveryOrderProducts.styles';

const DeliveryOrderProducts = ({products}) => {
  const classes = useStyles();

  /**
   * Rencer cell of diff
   * @param diff
   * @return {Typography}
   * @private
   */
  const _formatDiff = ({diff}) =>
    <Typography variant="body" style={{color: diffColor(diff)}}>
      {format.euro(diff)}
    </Typography>;

  /**
   * code, productName, quantity, price, amount, diff
   */
  return <TableMaterial
    className={classes.table}
    columns={[
      {
        title: 'Código',
        field: 'code',
      },
      {
        title: 'Producto',
        field: 'productName',
      },
      {
        title: 'Cantidad / Peso',
        render: ({quantity}) => format.number(quantity),
      },
      {
        title: 'Precio',
        render: ({price}) => format.euro(price),
      },
      {
        title: 'Importe',
        render: ({amount}) => format.euro(amount),
      },
      {
        title: 'Diferencia',
        render: _formatDiff,
      },
    ]}
    data={products}
  />;
};

DeliveryOrderProducts.propTypes = {
  products: PropTypes.array.isRequired,
};

DeliveryOrderProducts.displayName = 'DeliveryOrderProducts';
export const story = DeliveryOrderProducts;
export default memo(DeliveryOrderProducts);
