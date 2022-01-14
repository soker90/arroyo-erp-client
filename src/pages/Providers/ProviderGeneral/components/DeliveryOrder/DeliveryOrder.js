/* eslint-disable */
import {
  lazy, useEffect, useState,
} from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';

import { LoadingScreen } from 'components';
import NoInvoices from './components/NoInvoices';
import DeliveryOrderSelectedSum from './components/DeliveryOrderSelectedSum';
import { useStyles } from './DeliveryOrder.styles';

const InInvoices = lazy(() => import('./components/InInvoices'));

const DeliveryOrder = ({
  free,
  inInvoices,
  getDeliveryOrders,
  idProvider,
  selected,
  setSelected,
}) => {
  const classes = useStyles();
  const [showInInvoices, setShowInInvoices] = useState(false);

  useEffect(() => {
    if (idProvider) getDeliveryOrders({ provider: idProvider });
  }, [getDeliveryOrders, idProvider]);

  const _handleShowClick = () => {
    setShowInInvoices(state => !state);
  };

  if (!idProvider) return <LoadingScreen />;


  return (
    <>
      {Boolean(selected.length) && <DeliveryOrderSelectedSum selected={selected} free={free} />}
      <NoInvoices
        deliveryOrders={free}
        selected={selected}
        setSelected={setSelected}
      />

      <Button
        color='primary'
        onClick={_handleShowClick}
        variant='outlined'
        className={classes.button}
      >
        {showInInvoices ? 'Ocultar' : 'Mostrar'}
        {' '}
        en factura
      </Button>

      {showInInvoices && (
        <InInvoices
          deliveryOrders={inInvoices}
          idProvider={idProvider}
          getDeliveryOrders={getDeliveryOrders}
        />
      )}
    </>
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

export default DeliveryOrder;
