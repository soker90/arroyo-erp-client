import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {Card, CardContent, CardHeader, Divider, IconButton, Tooltip} from '@material-ui/core';
import DeliveryOrderProductSelect from '../DeliveryOrderProductSelect';
import {useStyles} from 'pages/DeliveryOrder/components/DeliveryOrderProducts/DeliveryOrderProducts.styles';
import AddIcon from '@material-ui/icons/Add';

const DeliveryOrderProducts = ({products, selectedProducts, addProduct, updateProduct, deleteProduct}) => {
  const classes = useStyles();

  /**
   * Render button add product
   * @return {Tooltip}
   * @private
   */
  const _renderAddButton = () =>
    <Tooltip title="Añadir producto">
      <IconButton size="small" className={classes.button} onClick={addProduct}>
        <AddIcon/>
      </IconButton>
    </Tooltip>;

  /**
   * Render row of product
   * @param {Object} data
   * @param {number} index
   * @return {NewDeliveryOrderProductSelect}
   * @private
   */
   const _renderRow = (data, index) => <DeliveryOrderProductSelect
    key={index}
    products={products} updateProduct={updateProduct}
    deleteProduct={deleteProduct}
    data={data} index={index}/>;

  return <Card className={classes.root}>
    <CardHeader title='Productos' action={_renderAddButton()}/>
    <Divider/>
    <CardContent>
      {selectedProducts.map(_renderRow)}
    </CardContent>
  </Card>;
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
