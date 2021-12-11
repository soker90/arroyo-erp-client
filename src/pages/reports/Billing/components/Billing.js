/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useEffect } from 'react';
import { Container } from '@mui/material';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';

import { Page } from 'components';
import BillingTable from './BillingTable';
import Header from './Header';
import { useStyles } from './Billing.styles';

const Billing = ({ billing, getBilling }) => {
  const classes = useStyles();
  const { year } = useParams();

  useEffect(() => {
    getBilling(year);
  }, [year]);

  return (
    <Page className={classes.root} title={`Facturación ${year}`}>
      <Container maxWidth={false}>
        <Header year={Number(year)} />

        <BillingTable billing={billing} />
      </Container>
    </Page>
  );
};
Billing.propTypes = {
  billing: PropTypes.array.isRequired,
  getBilling: PropTypes.func.isRequired,
};

Billing.displayName = 'Billing';
export const story = Billing;
export default memo(Billing);
