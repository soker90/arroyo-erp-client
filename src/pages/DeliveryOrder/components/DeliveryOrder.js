/* eslint-disable react-hooks/exhaustive-deps */
import React, {memo, useEffect} from 'react';
import {Box, Container, Grid} from '@material-ui/core';
import PropTypes from 'prop-types';
import AddIcon from '@material-ui/icons/Add';

import {Header, Page} from 'components';
import DeliveryOrderProducts from './DeliveryOrderProducts';
import DeliveryOrderData from './DeliveryOrderData';
import DeliveryOrderTotals from './DeliveryOrderTotals';
import {useStyles} from './DeliveryOrder.styles';


const DeliveryOrder = (
  {
    match: {params: {idDeliveryOrder}}, getProducts, getDeliveryOrder, provider, nameProvider,
    products, date, totals, _id,
  }) => {
  const classes = useStyles();
  // const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(() => {
    if (idDeliveryOrder && idDeliveryOrder !== _id)
      getDeliveryOrder(idDeliveryOrder);
  }, [idDeliveryOrder]);

  useEffect(() => {
    if (provider) getProducts(provider);
  }, [provider]);

  /**
   * Add product to selected product
   * @private
   */
  /* const _addProduct = () => {
    setSelectedProducts([...selectedProducts, {
      product: '',
      quantity: 0,
      code: '',
      price: 0,
      amount: 0,
    }]);
  };*/

  /**
   * Actualiza los datos del producto seleccionado en es estado
   * @param {number} index
   * @param {object} dataProduct
   * @private
   */
  /*const _updateProduct = (index, dataProduct) => {
    const _selectedProducts = selectedProducts.slice();
    _selectedProducts[index] = dataProduct;
    setSelectedProducts(_selectedProducts);
  };*/

  /**
   * Delete product
   * @param {number} index
   * @private
   */
  /*const _deleteProduct = index => {
    const _newProducts = selectedProducts.filter((i, idx) => idx !== index);
    setSelectedProducts(_newProducts);
  };*/

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
            link: `/app/proveedores/${provider}`,
            title: `${nameProvider}`,
          },
            {
              link: `/app/proveedores/${provider}#Albaranes`,
              title: 'Albaranes',
            }]}
          title='Albarán'
          description=''
          buttons={[{
            variant: 'contained',
            onClick: () => console.log('Añadir producto'),
            Icon: AddIcon,
            disableSvg: true,
            label: 'Añadir',
          }]}
        />

        <Box py={3} pb={1}>
          {/*<DeliveryOrderData setData={setData} date={data.date}/>*/}
        </Box>

        <DeliveryOrderProducts
          products={products}
        />
        {/*<DeliveryOrderProducts
          products={products}
          addProduct={_addProduct}
          selectedProducts={selectedProducts}
          deleteProduct={_showModalDelete}
          updateProduct={_updateProduct}/>*/}
        <Grid container spacing={3} className={classes.cards}>
          <Grid item xs={12} md={6}>
            <DeliveryOrderData date={date}/>
          </Grid>
          <Grid item xs={12} md={6}>
            <DeliveryOrderTotals {...totals}/>
          </Grid>
        </Grid>

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
export const story = DeliveryOrder;
export default memo(DeliveryOrder);
