import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';

import InInvoices from './components/InInvoices';
import NoInvoices from './components/NoInvoices';
import { useStyles } from './DeliveryOrder.styles';

const DeliveryOrder = ({
  free, inInvoices, getDeliveryOrders, idProvider,
}) => {
  const classes = useStyles();

  useEffect(() => {
    getDeliveryOrders(idProvider);
  }, [getDeliveryOrders, idProvider]);

  return (
    idProvider
    && (
      <>
        <NoInvoices deliveryOrders={free} />
        <InInvoices deliveryOrders={inInvoices} />
      </>
    )
  );
};

DeliveryOrder.propTypes = {
  free: PropTypes.array.isRequired,
  inInvoices: PropTypes.array.isRequired,
  idProvider: PropTypes.string,
  getDeliveryOrders: PropTypes.func.isRequired,
};

DeliveryOrder.displayName = 'DeliveryOrderTable';

export default memo(DeliveryOrder);
