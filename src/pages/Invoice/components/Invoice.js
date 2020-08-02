/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';
import { Container } from '@material-ui/core';
import uniqId from 'uniqid';

import { LoadingScreen, Page } from 'components';
import DeliveryOrderExpand from 'components/DeliveryOrderExpand';
import Header from './Header';
import { useStyles } from './Invoice.styles';
import InvoiceCards from './InvoiceCards';

const Invoice = ({
  getInvoice, id, nameProvider, provider, deliveryOrders, totals, data, payment, resetInvoiceState,
}) => {
  const { idInvoice } = useParams();
  const classes = useStyles();

  useEffect(() => {
    if (idInvoice && idInvoice !== id) getInvoice(idInvoice);
  }, [idInvoice]);

  useEffect(() => () => resetInvoiceState(), []);

  if (!id) return <LoadingScreen />;

  return (
    <Page className={classes.root} title={`${nameProvider} | Factura`}>
      <Container maxWidth={false} className={classes.container}>
        <Header provider={provider} nameProvider={nameProvider} nOrder={data.nOrder} />

        <InvoiceCards totals={totals} data={data} payment={payment} />

        <div className={classes.orders}>
          {deliveryOrders?.map(props => (
            <DeliveryOrderExpand {...props} key={uniqId()} />
          ))}
        </div>

      </Container>
    </Page>
  );
};

Invoice.propTypes = {
  getInvoice: PropTypes.func.isRequired,
  deliveryOrders: PropTypes.array,
  id: PropTypes.string,
  nameProvider: PropTypes.string,
  provider: PropTypes.string,
  totals: PropTypes.object,
  data: PropTypes.object,
  payment: PropTypes.object,
  resetInvoiceState: PropTypes.func.isRequired,
};

Invoice.displayName = 'Invoice';
export const story = Invoice;
export default memo(Invoice);
