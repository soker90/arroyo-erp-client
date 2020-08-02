import React from 'react';
import PropTypes from 'prop-types';

import InvoiceData from './components/InvoiceData';
import InvoiceTotals from './components/InvoiceTotals';
import InvoicePayment from './components/InvoicePayment';
import { useStyles } from './InvoiceCards.styles';

const InvoiceCards = ({ data, totals, payment }) => {
  const classes = useStyles();

  return (
    <>
      <InvoiceData {...data} className={classes.data} />
      <InvoiceTotals {...totals} isEditable={!data.nOrder} className={classes.totals} />
      {payment && <InvoicePayment {...payment} className={classes.data} />}
    </>
  );
};

InvoiceCards.propTypes = {
  totals: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  payment: PropTypes.object,
};

InvoiceCards.displayName = 'InvoiceCards';

export default InvoiceCards;
