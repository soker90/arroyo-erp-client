/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useEffect } from 'react';
import { Container } from '@material-ui/core';
import PropTypes from 'prop-types';

import { Page, Header } from 'components';
import PaymentsTable from './ClientPaymentsTable';
import { useStyles } from './ClientPayments.styles';

const ClientPayments = ({ payments, getClientPayments }) => {
  const classes = useStyles();

  useEffect(() => {
    getClientPayments();
  }, [getClientPayments]);

  return (
    <Page className={classes.root} title='Pagos clientes'>
      <Container maxWidth={false}>
        <Header
          title='Pagos de clientes'
        />

        <PaymentsTable payments={payments} />
      </Container>
    </Page>
  );
};
ClientPayments.propTypes = {
  payments: PropTypes.array.isRequired,
  getClientPayments: PropTypes.func.isRequired,
};

ClientPayments.displayName = 'ClientPayments';
export const story = ClientPayments;
export default memo(ClientPayments);
