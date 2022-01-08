/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Container } from '@material-ui/core';
import PropTypes from 'prop-types';

import { Page } from 'components';
import Header from './Header';
import PaymentsTable from './PaymentsTable';
import { useStyles } from './Payments.styles';

const Payments = ({ payments, getPayments }) => {
  const [selected, setSelected] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    getPayments();
  }, [getPayments]);

  useEffect(() => {
    setSelected([]);
  }, [payments]);

  return (
    <Page className={classes.root} title='Pagos'>
      <Container maxWidth={false}>
        <Header selected={selected} />

        <PaymentsTable payments={payments} selected={selected} setSelected={setSelected} />
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
export default Payments;
