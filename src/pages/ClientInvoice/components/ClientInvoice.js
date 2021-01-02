/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';
import { Container } from '@material-ui/core';

import { LoadingScreen, Page } from 'components';
import Header from './Header';
import { useStyles } from './ClientInvoice.styles';
import ClientInvoiceCards from './ClientInvoiceCards';

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
}) => {
  const { idInvoice } = useParams();
  const classes = useStyles();

  useEffect(() => {
    if (idInvoice && idInvoice !== _id) getClientInvoice(idInvoice);
  }, [idInvoice]);

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
        />

        <ClientInvoiceCards
          totals={totals}
          date={date}
          id={idInvoice}
          updateDataClientInvoice={updateDataClientInvoice}
        />

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
};

ClientInvoice.displayName = 'ClientInvoice';
export const story = ClientInvoice;
export default memo(ClientInvoice);
