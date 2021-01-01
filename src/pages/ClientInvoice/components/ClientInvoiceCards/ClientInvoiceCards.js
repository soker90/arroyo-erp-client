/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from 'react';
import PropTypes from 'prop-types';

import { Grid } from '@material-ui/core';
import { useStyles } from './ClientInvoiceCards.styles';
import ClientInvoiceData from './components/ClientInvoiceData';
import ClientInvoiceTotals from './components/ClientInvoiceTotals';

const ClientInvoiceCards = ({
  date, totals, id, nInvoice,
}) => {
  const classes = useStyles();

  const _updateData = useCallback(() => {

  }, []);
  return (
    <Grid container spacing={3} className={classes.cards}>
      <Grid item xs={12} md={5}>
        <ClientInvoiceData
          date={date}
          nInvoice={nInvoice}
          readOnly={Boolean(nInvoice)}
          updateData={_updateData}
          id={id}
        />
      </Grid>
      <Grid item xs={12} md={7}>
        <ClientInvoiceTotals totals={totals} isEditable={!nInvoice} />
      </Grid>
    </Grid>
  );
};

ClientInvoiceCards.propTypes = {
  totals: PropTypes.object.isRequired,
  date: PropTypes.number.isRequired,
  nInvoice: PropTypes.string,
  id: PropTypes.string.isRequired,
};

ClientInvoiceCards.displayName = 'InvoiceCards';

export default ClientInvoiceCards;
