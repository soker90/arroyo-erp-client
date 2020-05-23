import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {Tooltip, Typography} from '@material-ui/core';
import {useStyles} from 'pages/DeliveryOrder/components/DeliveryOrderProducts/DeliveryOrderProducts.styles';
import {TableMaterial} from 'components';
import {format} from 'utils';

const DeliveryOrderProducts = ({products}) => {
  const classes = useStyles();

  /**
   * Render button add product
   * @return {Tooltip}
   * @private
   */
  /* const _renderAddButton = () =>
    <Tooltip title="Añadir producto">
      <IconButton size="small" className={classes.button} onClick={addProduct}>
        <AddIcon/>
      </IconButton>
    </Tooltip>; */

  /**
   * Render row of product
   * @param {Object} data
   * @param {number} index
   * @return {NewDeliveryOrderProductSelect}
   * @private
   */
  /* const _renderRow = (data, index) => <DeliveryOrderProductSelect
   key={index}
   products={products} updateProduct={updateProduct}
   deleteProduct={deleteProduct}
   data={data} index={index}/>; */

  /**
   * Diff > 0 darkgreen
   * Diff < 0 red
   * Diff === 0 false
   * @param diff
   * @return {string}
   * @private
   */
  const _diffColor = diff =>
    !!diff && (diff > 0 ?  'darkgreen' : 'red');

  const _formatDiff = ({diff}) =>
    <Typography variant="body" style={{color: _diffColor(diff)}}>
      {diff}
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
  selectedProducts: PropTypes.array.isRequired,
  addProduct: PropTypes.func.isRequired,
  updateProduct: PropTypes.func.isRequired,
  deleteProduct: PropTypes.func.isRequired,
};

DeliveryOrderProducts.defaultProps = {
  date: new Date(),
};

DeliveryOrderProducts.displayName = 'NewDeliveryOrderProducts';

export default memo(DeliveryOrderProducts);
