/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  memo, useEffect,
} from 'react';
import { Container } from '@material-ui/core';
import PropTypes from 'prop-types';

import { Page } from 'components';
import Header from './Header';
import PaymentsTable from './PaymentsTable';
import { useStyles } from './Payments.styles';

const Payments = ({ payments, getPayments }) => {
  const classes = useStyles();

  useEffect(() => {
    getPayments();
  }, [getPayments]);

  return (
    <Page className={classes.root} title='Pagos'>
      <Container maxWidth={false} className={classes.container}>
        <Header />

        <PaymentsTable payments={payments} />
      </Container>
    </Page>
  );
};
Payments.propTypes = {
  payments: PropTypes.array.isRequired,
  getPayments: PropTypes.func.isRequired,
};

Payments.displayName = 'Payments';
export const story = Payments;
export default memo(Payments);
