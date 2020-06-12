import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';

import NoInvoices from './components/NoInvoices';
import { useStyles } from './DeliveryOrder.styles';

const DeliveryOrder = ({ deliveryOrders, getDeliveryOrders, idProvider }) => {
  const classes = useStyles();

  useEffect(() => {
    getDeliveryOrders(idProvider);
  }, [getDeliveryOrders, idProvider]);

  return (
    idProvider
    && (
      <NoInvoices deliveryOrders={deliveryOrders}/>
    )
  );
};

DeliveryOrder.propTypes = {
  deliveryOrders: PropTypes.array.isRequired,
  idProvider: PropTypes.string,
  getDeliveryOrders: PropTypes.func.isRequired,
};

DeliveryOrder.displayName = 'DeliveryOrderTable';

export default memo(DeliveryOrder);
