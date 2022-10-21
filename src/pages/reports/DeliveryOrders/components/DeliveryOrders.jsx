/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { Container } from '@mui/material';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';

import { Page } from 'components';
import DeliveryOrdersTable from './DeliveryOrdersTable';
import Header from './Header';
import { useStyles } from './DeliveryOrders.styles';

const DeliveryOrders = ({ doCount, getDeliveryOrderCount }) => {
  const classes = useStyles();
  const { year } = useParams();

  useEffect(() => {
    getDeliveryOrderCount(year);
  }, [year]);

  return (
    <Page className={classes.root} title={`Albaranes ${year}`}>
      <Container maxWidth={false}>
        <Header year={Number(year)} />

        <DeliveryOrdersTable doCount={doCount} />
      </Container>
    </Page>
  );
};
DeliveryOrders.propTypes = {
  doCount: PropTypes.array.isRequired,
  getDeliveryOrderCount: PropTypes.func.isRequired,
};

DeliveryOrders.displayName = 'DeliveryOrders';
export const story = DeliveryOrders;
export default DeliveryOrders;
