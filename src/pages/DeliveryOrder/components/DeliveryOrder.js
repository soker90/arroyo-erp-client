/* eslint-disable react-hooks/exhaustive-deps */
import React, {memo, useEffect, useReducer, useState} from 'react';
import {Box, Container} from '@material-ui/core';
import PropTypes from 'prop-types';

import {Header, Page} from 'components';
import DeliveryOrderData from './DeliveryOrderData';
import DeliveryOrderProducts from './DeliveryOrderProducts';
import {useStyles} from './DeliveryOrder.styles';


const DeliveryOrder = ({products, match: {params: {idProvider}}, getProducts}) => {
  const classes = useStyles();
  const [data, setData] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      date: null,
      provider: idProvider,
    });
  const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(() => {
    if (idProvider) {
      getProducts(idProvider);
    }
  }, [idProvider]);


  /**
   * Add product to selected product
   * @private
   */
  const _addProduct = () => {
    setSelectedProducts([...selectedProducts, {
      product: '',
      quantity: 0,
      code: '',
      price: 0,
      amount: 0,
    }]);
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
    // showDeleteProductModal(_deleteProduct, index);
  };

  const _handleClickSave = () => {
    // createDeliveryOrder({...data, products: selectedProducts});
  };

  return (
    <Page className={classes.root} title='Nuevo albarán'>
      <Container maxWidth={false} className={classes.container}>
        <Header
          routes={[{
            link: `/app/proveedores/${idProvider}`,
            title: 'Proveedor X',
          },
            {
              link: `/app/proveedores/${idProvider}#Albaranes`,
              title: 'Albaranes',
            }]}
          title='Nuevo'
        />

        <Box py={3} pb={1}>
          <DeliveryOrderData setData={setData} date={data.date}/>
        </Box>
        <DeliveryOrderProducts
          products={products}
          addProduct={_addProduct}
          selectedProducts={selectedProducts}
          deleteProduct={_showModalDelete}
          updateProduct={_updateProduct}/>

      </Container>
    </Page>
  );
};

DeliveryOrder.propTypes = {
  provider: PropTypes.object.isRequired,
  billing: PropTypes.object,
  getProvider: PropTypes.func.isRequired,
  showEditModal: PropTypes.func.isRequired,
};

DeliveryOrder.displayName = 'DeliveryOrder';

export default memo(DeliveryOrder);
