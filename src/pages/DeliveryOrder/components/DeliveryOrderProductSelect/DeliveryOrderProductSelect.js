import React, {memo, useState} from 'react';
import PropTypes from 'prop-types';
import {Grid, IconButton, Tooltip} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import {InputForm, SelectForm} from 'components';
import {stringToNumber} from 'utils';
import {useStyles} from './DeliveryOrderProductSelect.styles';

const DeliveryOrderProductSelect = ({index, products, updateProduct, data: {product, quantity, price, amount}, deleteProduct}) => {
  const classes = useStyles();
  const [code, setCode] = useState('');

  /**
   * Handle change select
   * @param {String} value
   * @private
   */
  const _handleSelect = ({target: {value}}) => {
    const selected = products.find(product => product._id === value);
    updateProduct(index, {
      product: value,
      quantity,
    });
    setCode(selected?.code || '');
  };

  /**
   * Handle change code
   * @param {string} value
   * @private
   */
  const _handleCode = ({target: {value}}) => {
    const selected = products.find(product => product.code === value);
    updateProduct(index, {
      product: selected?._id || '',
      quantity,
    });
    setCode(value);
  };

  /**
   * Handle event change quantity
   * @param {String} value
   * @private
   */
  const _handleChangeQuantity = ({target: {value}}) => {
    updateProduct(index, {
      product,
      quantity: stringToNumber(value),
    });
  };

  /**
   * Handle event click
   * Remove product
   * @private
   */
  const _handleClickDelete = () => {
    deleteProduct(index);
  };

  /**
   * Render delete product button
   * @returns {Grid}
   * @private
   */
  const _renderDeleteButton = () =>
    <Grid item xs={1} className={classes.buttons}>
      <Tooltip title='Eliminar'>
        <IconButton size="small" onClick={_handleClickDelete}>
          <DeleteIcon/>
        </IconButton>
      </Tooltip>
    </Grid>;

  return <Grid spacing={3} container>
    <InputForm
      label='Código' value={code} onChange={_handleCode} size={2}
      InputLabelProps={{
        shrink: true,
      }}/>
    <SelectForm
      label='Selecciona un producto'
      value={product}
      name='provider'
      onChange={_handleSelect}
      disabled={!products?.length}
      size={3}
    >
      <option value="">--------</option>
      {products?.map((item, idx) =>
        <option key={idx} value={item._id}>
          {item.name}
        </option>,
      )}
    </SelectForm>
    <InputForm label='Peso / Cantidad' defaultValue={quantity} onChange={_handleChangeQuantity}
               size={2} type='number'/>
    <InputForm label='Precio' defaultValue={price} onChange={_handleChangeQuantity} size={2}
               type='number'/>
    <InputForm label='Importe' defaultValue={amount} onChange={_handleChangeQuantity} size={2}
               type='number'/>
    {_renderDeleteButton()}
  </Grid>;
};

DeliveryOrderProductSelect.propTypes = {
  products: PropTypes.array,
  deleteProduct: PropTypes.func.isRequired,
  updateProduct: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

DeliveryOrderProductSelect.displayName = 'NewDeliveryOrderProductSelect';

export default memo(DeliveryOrderProductSelect);
