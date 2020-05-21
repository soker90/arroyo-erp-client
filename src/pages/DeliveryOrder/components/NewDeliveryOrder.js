import React, {Fragment, memo, useEffect, useReducer, useState} from 'react';
import PropTypes from 'prop-types';
import {Button} from '@material-ui/core';

import {ContainerTab, ContentTab, DividerTab, HeaderGeneric} from 'components';
import NewDeliveryOrderData from './DeliveryOrderData';
import NewDeliveryOrderProducts from './DeliveryOrderProducts';
import {useStyles} from './NewDeliveryOrder.styles';

const NewDeliveryOrder = (
  {provider, providers, getProviders, products, getProducts, showDeleteProductModal, createDeliveryOrder}) => {
  const [data, setData] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      date: null,
      provider: provider?._id || '',
    });
  const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(() => {
    getProviders();
  }, []);

  useEffect(() => {
    if (data.provider)
      getProducts(data.provider);
  }, [data.provider]);

  const classes = useStyles();
  /**
   * Add product to selected product
   * @private
   */
  const _addProduct = () => {
    setSelectedProducts([...selectedProducts, {product: '', quantity: 0, code: ''}]);
  };

  /**
   * Actualiza los datos del producto seleccionado en es estado
   * @param {number} index
   * @param {object} dataProduct
   * @private
   */
  const _updateProduct = (index, dataProduct) => {
    const _selectedProducts = selectedProducts.slice();
    _selectedProducts[index] = dataProduct;
    setSelectedProducts(_selectedProducts);
  };

  /**
   * Delete product
   * @param {number} index
   * @private
   */
  const _deleteProduct = index => {
    const _newProducts = selectedProducts.filter((i, idx) => idx !== index);
    setSelectedProducts(_newProducts);
  };

  /**
   * Show modal to delete product
   * @param {number} index
   * @private
   */
  const _showModalDelete = index => {
    showDeleteProductModal(_deleteProduct, index);
  };

  const _handleClickSave = () => {
    createDeliveryOrder({...data, products: selectedProducts});
  };

  return <ContainerTab>
    <HeaderGeneric title='Nuevo albarán' category='Albaranes'/>
    <DividerTab/>
    <ContentTab>
      <NewDeliveryOrderData setData={setData} providers={providers} {...data} />
      {data.provider &&
      <Fragment>
        <NewDeliveryOrderProducts
          products={products} addProduct={_addProduct}
          selectedProducts={selectedProducts}
          deleteProduct={_showModalDelete}
          updateProduct={_updateProduct}/>
        <div className={classes.buttons}>
          <Button
            color="primary"
            variant="contained"
            onClick={_handleClickSave}
          >
            Guardar
          </Button>
        </div>
      </Fragment>
      }
    </ContentTab>
  </ContainerTab>;
};

NewDeliveryOrder.propTypes = {
  provider: PropTypes.object,
  providers: PropTypes.array,
  getProviders: PropTypes.func.isRequired,
  products: PropTypes.array,
  getProducts: PropTypes.func.isRequired,
  showDeleteProductModal: PropTypes.func.isRequired,
};

NewDeliveryOrder.displayName = 'NewDeliveryOrder';

export default memo(NewDeliveryOrder);
