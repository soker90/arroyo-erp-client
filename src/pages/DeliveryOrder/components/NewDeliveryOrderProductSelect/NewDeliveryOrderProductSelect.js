import React, {memo, useState} from 'react';
import PropTypes from 'prop-types';
import {Grid, IconButton, Tooltip} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import {InputForm, SelectForm} from 'components/Forms';
import {useStyles} from './NewDeliveryOrderProductsSelect.styles';
import {stringToNumber} from 'utils';

const NewDeliveryOrderProductSelect = ({index, products, updateProduct, data: {product, quantity}, deleteProduct}) => {
  const classes = useStyles();
  const [code, setCode] = useState('');

  /**
   * Handle change select
   * @param {String} value
   * @private
   */
  const _handleSelect = ({target: {value}}) => {
    const selected = products.find(product => product._id === value);
    updateProduct(index, {product: value, quantity});
    setCode(selected?.code || '');
  };

  /**
   * Handle change code
   * @param {string} value
   * @private
   */
  const _handleCode = ({target: {value}}) => {
    const selected = products.find(product => product.code === value);
    updateProduct(index, {product: selected?._id || '', quantity});
    setCode(value);
  };

  /**
   * Handle event change quantity
   * @param {String} value
   * @private
   */
  const _handleChangeQuantity = ({target: {value}}) => {
    updateProduct(index, {product, quantity: stringToNumber(value)});
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
      label='Código' value={code} onChange={_handleCode} size={4}
      InputLabelProps={{
        shrink: true,
      }}/>
    <SelectForm
      label='Selecciona un producto'
      value={product}
      name='provider'
      onChange={_handleSelect}
      disabled={!products?.length}
      size={4}
    >
      <option value="">--------</option>
      {products?.map((item, idx) =>
        <option key={idx} value={item._id}>
          {item.name}
        </option>,
      )}
    </SelectForm>
    <InputForm label='Peso / Cantidad' defaultValue={quantity} onChange={_handleChangeQuantity} size={3} type='number'/>
    {_renderDeleteButton()}
  </Grid>
};

NewDeliveryOrderProductSelect.propTypes = {
  products: PropTypes.array,
  deleteProduct: PropTypes.func.isRequired,
  updateProduct: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

NewDeliveryOrderProductSelect.displayName = 'NewDeliveryOrderProductSelect';

export default memo(NewDeliveryOrderProductSelect);
