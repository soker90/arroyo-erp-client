import React, {
  lazy, memo, useEffect, useState,
} from 'react';
import PropTypes from 'prop-types';

import NoInvoices from './components/NoInvoices';
import DeliveryOrderSelectedSum from './components/DeliveryOrderSelectedSum';
// import { useStyles } from './DeliveryOrder.styles';

const InInvoices = lazy(() => import('./components/InInvoices'));

const DeliveryOrder = ({
  free,
  inInvoices,
  getDeliveryOrders,
  idProvider,
  selected,
  setSelected,
}) => {
  // const classes = useStyles();
  const [showInInvoices, setShowInInvoices] = useState(true);

  useEffect(() => {
    if (idProvider) getDeliveryOrders(idProvider);

    setShowInInvoices(true); // remove
  }, [getDeliveryOrders, idProvider]);

  return (
    idProvider && (
      <>
        {selected.length && <DeliveryOrderSelectedSum selected={selected} free={free} />}
        <NoInvoices
          deliveryOrders={free}
          selected={selected}
          setSelected={setSelected}
        />
        {showInInvoices && (
          <InInvoices deliveryOrders={inInvoices} />
        )}
      </>
    )
  );
};

DeliveryOrder.propTypes = {
  free: PropTypes.array.isRequired,
  inInvoices: PropTypes.shape({
    data: PropTypes.array,
    count: PropTypes.number,
  }),
  idProvider: PropTypes.string,
  getDeliveryOrders: PropTypes.func.isRequired,
  setSelected: PropTypes.func.isRequired,
  selected: PropTypes.array.isRequired,
};

DeliveryOrder.displayName = 'DeliveryOrder';

export default memo(DeliveryOrder);
