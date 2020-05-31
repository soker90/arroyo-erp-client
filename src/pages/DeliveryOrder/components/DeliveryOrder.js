/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useEffect } from 'react';
import { Container, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import AddIcon from '@material-ui/icons/Add';

import { Header, Page } from 'components';
import DeliveryOrderProducts from './DeliveryOrderProducts';
import DeliveryOrderData from './DeliveryOrderData';
import DeliveryOrderTotals from './DeliveryOrderTotals';
import { useStyles } from './DeliveryOrder.styles';


const DeliveryOrder = (
  {
    match: { params: { idDeliveryOrder } }, getProducts, getDeliveryOrder, provider, nameProvider,
    products, date, totals, _id, updateDateDeliveryOrder, showAddProductModal,
    showDeleteProductModal, showEditProductModal,
  },
) => {
  const classes = useStyles();

  useEffect(() => {
    if (idDeliveryOrder && idDeliveryOrder !== _id) getDeliveryOrder(idDeliveryOrder);
  }, [idDeliveryOrder]);

  useEffect(() => {
    if (provider) getProducts(provider);
  }, [provider]);

  /**
   * Handle change date
   * @param {Date} value
   * @private
   */
  const _handleChangeDate = value => {
    updateDateDeliveryOrder(idDeliveryOrder, value);
  };

  return (
    <Page className={classes.root} title={`${nameProvider} | Albarán`}>
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
          title="Albarán"
          description=""
          buttons={[{
            variant: 'contained',
            onClick: showAddProductModal,
            Icon: AddIcon,
            disableSvg: true,
            label: 'Añadir',
          }]}
        />

        <DeliveryOrderProducts
          products={products}
          showDeleteProductModal={showDeleteProductModal}
          showEditProductModal={showEditProductModal}
        />

        <Grid container spacing={3} className={classes.cards}>
          <Grid item xs={12} md={6}>
            <DeliveryOrderData date={date} setDate={_handleChangeDate} />
          </Grid>
          <Grid item xs={12} md={6}>
            <DeliveryOrderTotals {...totals} />
          </Grid>
        </Grid>

      </Container>
    </Page>
  );
};

DeliveryOrder.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      idDeliveryOrder: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  getProducts: PropTypes.func.isRequired,
  getDeliveryOrder: PropTypes.func.isRequired,
  provider: PropTypes.string,
  nameProvider: PropTypes.string,
  products: PropTypes.array.isRequired,
  date: PropTypes.number,
  totals: PropTypes.object,
  _id: PropTypes.string,
  updateDateDeliveryOrder: PropTypes.func.isRequired,
  showAddProductModal: PropTypes.func.isRequired,
  showDeleteProductModal: PropTypes.func.isRequired,
  showEditProductModal: PropTypes.func.isRequired,
};

DeliveryOrder.displayName = 'DeliveryOrder';
export const story = DeliveryOrder;
export default memo(DeliveryOrder);
