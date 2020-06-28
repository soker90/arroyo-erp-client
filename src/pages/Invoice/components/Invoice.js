/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';
import { Container, Grid } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import { Header, Page } from 'components';
import DeliveryOrderExpand from 'components/DeliveryOrderExpand';
import DeliveryOrderData from './InvoiceData';
import DeliveryOrderTotals from './InvoiceTotals';
import { useStyles } from './Invoice.styles';

const Invoice = (
  {
    getInvoice, _id, nameProvider, provider, deliveryOrders, totals, data,
  }
) => {
  const { idInvoice } = useParams();
  const classes = useStyles();

  useEffect(() => {
    if (idInvoice && idInvoice !== _id) getInvoice(idInvoice);
  }, [idInvoice]);

  /**
   * Handle change date
   * @param {Date} value
   * @private
   */
  const _handleChangeDate = value => {
    // updateDateDeliveryOrder(idDeliveryOrder, value);
  };

  return (
    <Page className={classes.root} title={`${nameProvider} | Factura`}>
      <Container maxWidth={false} className={classes.container}>
        <Header
          routes={[{
            link: `/app/proveedores/${provider}`,
            title: `${nameProvider}`,
          },
          {
            link: `/app/proveedores/${provider}#Facturas`,
            title: 'Facturas',
          }]}
          title="Factura"
          description=""
          buttons={[{
            variant: 'contained',
            // onClick: showAddProductModal,
            Icon: AddIcon,
            disableSvg: true,
            label: 'Añadir',
          }]}
        />

        <Grid container spacing={3} className={classes.cards}>
          <Grid item xs={12} md={4}>
            <DeliveryOrderData
              {...data}
              setDate={_handleChangeDate}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <DeliveryOrderTotals {...totals} />
          </Grid>
        </Grid>

        <div className={classes.orders}>
          {deliveryOrders?.map(props => (
            <DeliveryOrderExpand {...props} />
          ))}
        </div>

      </Container>
    </Page>
  );
};

Invoice.propTypes = {
  getInvoice: PropTypes.func.isRequired,
  invoice: PropTypes.object.isRequired,
  deliveryOrders: PropTypes.array.isRequired,
  _id: PropTypes.string.isRequired,
  nameProvider: PropTypes.string.isRequired,
  provider: PropTypes.string.isRequired,
  totals: PropTypes.array.isRequired,
  data: PropTypes.object.isRequired,
};

Invoice.displayName = 'Invoice';
export const story = Invoice;
export default memo(Invoice);
