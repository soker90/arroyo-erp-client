/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';
import { Container } from '@material-ui/core';

import { LoadingScreen, Page } from 'components';
import Header from './Header';
import { useStyles } from './ClientInvoice.styles';
import ClientInvoiceCards from './ClientInvoiceCards';
import DeliveryOrderInvoice from './DeliveryOrderInvoice';
import BannerPaid from '../../../components/BannerPaid';

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
  paid,
  paymentType,
  paymentDate,
}) => {
  const { idInvoice } = useParams();
  const classes = useStyles();
  const lastDORef = useRef(null);
  const isDOCreated = useRef(false);

  useEffect(() => {
    if (idInvoice && idInvoice !== _id) getClientInvoice(idInvoice);
  }, [idInvoice]);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => () => resetClientInvoiceState(), []);

  useEffect(() => {
    if (isDOCreated?.current) {
      lastDORef?.current?.scrollIntoView?.();
      isDOCreated.current = false;
    }
  }, [deliveryOrders?.length]);

  if (!_id) return <LoadingScreen />;

  // eslint-disable-next-line no-unsafe-optional-chaining
  const _isLastDO = index => deliveryOrders?.length - 1 === index;

  const createDOAndRedirect = id => {
    isDOCreated.current = true;
    createDeliveryOrder(id);
  };

  return (
    <Page className={classes.root} title={`${nameClient} | Factura`}>
      <Container maxWidth={false}>
        <Header
          client={client}
          nameClient={nameClient}
          createDeliveryOrder={createDOAndRedirect}
          id={idInvoice}
          nInvoice={nInvoice}
        />

        {!!nInvoice && (
          <BannerPaid
            paid={paid}
            paymentType={paymentType}
            paymentDate={paymentDate}
            className={classes.banner}
          />
        )}

        <ClientInvoiceCards
          total={total}
          taxBase={taxBase}
          iva={iva}
          date={date}
          id={idInvoice}
          updateDataClientInvoice={updateDataClientInvoice}
          nInvoice={nInvoice}
        />

        {deliveryOrders.map((deliveryOrder, index) => (
          <DeliveryOrderInvoice
            key={deliveryOrder._id}
            deliveryOrder={deliveryOrder}
            isEditable={!nInvoice}
            updateDOClientInvoice={updateDOClientInvoice}
            deleteDOClientInvoice={deleteDOClientInvoice}
            id={_id}
            refHeader={_isLastDO(index) ? lastDORef : null}
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
  paid: PropTypes.bool,
  paymentType: PropTypes.string,
  paymentDate: PropTypes.number,
};

ClientInvoice.displayName = 'ClientInvoice';
export const story = ClientInvoice;
export default ClientInvoice;
