import React from 'react';
import PropTypes from 'prop-types';

import DeliveryOrderData from './components/InvoiceData/InvoiceData';
import DeliveryOrderTotals from './components/InvoiceTotals/InvoiceTotals';
import { useStyles } from './InvoiceCards.styles';

const InvoiceCards = ({ data, totals }) => {
  const classes = useStyles();

  return (
    <>
      <DeliveryOrderData {...data} className={classes.data} />
      <DeliveryOrderTotals {...totals} isEditable={!data.nOrder} className={classes.totals} />
    </>
  );
};

InvoiceCards.propTypes = {
  totals: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

InvoiceCards.displayName = 'InvoiceCards';

export default InvoiceCards;
