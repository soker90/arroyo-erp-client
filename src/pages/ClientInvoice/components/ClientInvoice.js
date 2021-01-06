/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';
import { Container } from '@material-ui/core';

import { LoadingScreen, Page } from 'components';
import Header from './Header';
import { useStyles } from './ClientInvoice.styles';
import ClientInvoiceCards from './ClientInvoiceCards';
import DeliveryOrderInvoice from './DeliveryOrderInvoice';

const ClientInvoice = ({
  getClientInvoice,
  _id,
  nameClient,
  client,
  resetClientInvoiceState,
  date,
  total,
  taxBase,
  iva,
  updateDataClientInvoice,
  createDeliveryOrder,
  deliveryOrders,
  nInvoice,
  updateDOClientInvoice,
  deleteDOClientInvoice,
  getProducts,
}) => {
  const { idInvoice } = useParams();
  const classes = useStyles();

  useEffect(() => {
    if (idInvoice && idInvoice !== _id) getClientInvoice(idInvoice);
  }, [idInvoice]);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => () => resetClientInvoiceState(), []);

  if (!_id) return <LoadingScreen />;

  return (
    <Page className={classes.root} title={`${nameClient} | Factura`}>
      <Container maxWidth={false}>
        <Header
          client={client}
          nameClient={nameClient}
          createDeliveryOrder={createDeliveryOrder}
          id={idInvoice}
          nInvoice={nInvoice}
        />

        <ClientInvoiceCards
          total={total}
          taxBase={taxBase}
          iva={iva}
          date={date}
          id={idInvoice}
          updateDataClientInvoice={updateDataClientInvoice}
          nInvoice={nInvoice}
        />

        {deliveryOrders.map(deliveryOrder => (
          <DeliveryOrderInvoice
            key={deliveryOrder._id}
            deliveryOrder={deliveryOrder}
            isEditable={!nInvoice}
            updateDOClientInvoice={updateDOClientInvoice}
            deleteDOClientInvoice={deleteDOClientInvoice}
            id={_id}
          />
        ))}

      </Container>
    </Page>
  );
};

ClientInvoice.propTypes = {
  getClientInvoice: PropTypes.func.isRequired,
  _id: PropTypes.string,
  nameClient: PropTypes.string,
  client: PropTypes.string,
  resetClientInvoiceState: PropTypes.func.isRequired,
  date: PropTypes.number,
  updateDataClientInvoice: PropTypes.func.isRequired,
  createDeliveryOrder: PropTypes.func.isRequired,
  deliveryOrders: PropTypes.array.isRequired,
  nInvoice: PropTypes.string,
  updateDOClientInvoice: PropTypes.func.isRequired,
  deleteDOClientInvoice: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  taxBase: PropTypes.number.isRequired,
  iva: PropTypes.number.isRequired,
  getProducts: PropTypes.func.isRequired,
};

ClientInvoice.displayName = 'ClientInvoice';
export const story = ClientInvoice;
export default memo(ClientInvoice);
