/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import { isInvoiceEditable } from 'pages/Invoice/utils';
import InvoiceData from './components/InvoiceData';
import InvoiceTotals from './components/InvoiceTotals';
import InvoicePayment from './components/InvoicePayment';
import { useStyles } from './InvoiceCards.styles';

const InvoiceCards = ({ data, totals, payment }) => {
  const classes = useStyles();

  const isEditable = useMemo(() => isInvoiceEditable(data), [data.nOrder, data.concept]);

  return (
    <>
      <InvoiceData {...data} className={classes.data} isEditable={isEditable} />
      <InvoiceTotals {...totals} isEditable={isEditable} className={classes.totals} />
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
