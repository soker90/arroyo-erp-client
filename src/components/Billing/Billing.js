/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { Container } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';

import { Page } from 'components';
import BillingTable from './BillingTable';
import Header from './Header';
import { useStyles } from './Billing.styles';

const Billing = ({
  billing,
  getBilling,
  type,
}) => {
  const classes = useStyles();
  const { year } = useParams();

  useEffect(() => {
    getBilling(year);
  }, [year]);

  return (
    <Page className={classes.root} title={`Facturación ${type || ''} ${year}`}>
      <Container maxWidth={false}>
        <Header year={Number(year)} type={type} />

        <BillingTable billing={billing} type={type} />
      </Container>
    </Page>
  );
};
Billing.propTypes = {
  billing: PropTypes.array.isRequired,
  getBilling: PropTypes.func.isRequired,
  type: PropTypes.string,
};

Billing.displayName = 'Billing';
export const story = Billing;
export default Billing;
