/* eslint-disable react-hooks/exhaustive-deps */
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';

import { useStyles } from './ClientInvoiceCards.styles';
import ClientInvoiceData from './components/ClientInvoiceData';
import ClientInvoiceTotals from './components/ClientInvoiceTotals';

const ClientInvoiceCards = ({
  date,
  totals,
  id,
  nInvoice,
  updateDataClientInvoice,
}) => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.cards}>
      <Grid item xs={12} md={5}>
        <ClientInvoiceData
          date={date}
          nInvoice={nInvoice}
          readOnly={Boolean(nInvoice)}
          updateData={updateDataClientInvoice}
          id={id}
        />
      </Grid>
      <Grid item xs={12} md={7}>
        <ClientInvoiceTotals
          totals={totals}
          isEditable={!nInvoice}
        />
      </Grid>
    </Grid>
  );
};

ClientInvoiceCards.propTypes = {
  totals: PropTypes.object.isRequired,
  date: PropTypes.number.isRequired,
  nInvoice: PropTypes.string,
  id: PropTypes.string.isRequired,
  updateDataClientInvoice: PropTypes.func.isRequired,
};

ClientInvoiceCards.displayName = 'ClientInvoiceCards';

export default ClientInvoiceCards;
