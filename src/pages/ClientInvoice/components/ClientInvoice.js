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
  totals,
  updateDataClientInvoice,
  createDeliveryOrder,
  deliveryOrders,
  nInvoice,
}) => {
  const { idInvoice } = useParams();
  const classes = useStyles();

  useEffect(() => {
    if (idInvoice && idInvoice !== _id) getClientInvoice(idInvoice);
  }, [idInvoice]);

  useEffect(() => () => resetClientInvoiceState(), []);

  // eslint-disable-next-line no-unused-vars
  const _showProductModal = (deliveryOrder, product) => {
    // TODO
  };

  if (!_id) return <LoadingScreen />;

  return (
    <Page className={classes.root} title={`${nameClient} | Factura`}>
      <Container maxWidth={false}>
        <Header
          client={client}
          nameClient={nameClient}
          createDeliveryOrder={createDeliveryOrder}
          id={idInvoice}
        />

        <ClientInvoiceCards
          totals={totals}
          date={date}
          id={idInvoice}
          updateDataClientInvoice={updateDataClientInvoice}
        />

        {deliveryOrders.map(deliveryOrder => (
          <DeliveryOrderInvoice
            key={deliveryOrder._id}
            deliveryOrder={deliveryOrder}
            isEditable={!nInvoice}
            showEditProductModal={_showProductModal}
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
  totals: PropTypes.object.isRequired,
  updateDataClientInvoice: PropTypes.func.isRequired,
  createDeliveryOrder: PropTypes.func.isRequired,
  deliveryOrders: PropTypes.array.isRequired,
  nInvoice: PropTypes.string,
};

ClientInvoice.displayName = 'ClientInvoice';
export const story = ClientInvoice;
export default memo(ClientInvoice);
