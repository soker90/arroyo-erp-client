import React, { memo } from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardContent, CardHeader, Divider, Grid,
} from '@material-ui/core';

import { ItemCard } from 'components';
import { format } from 'utils';

const InvoicePayment = ({
  paymentDate, type, numCheque, paid, className,
}) => (
  <Card className={className}>
    <CardHeader
      title='Datos de pago'
    />
    <Divider />
    <CardContent>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <ItemCard label='Fecha de pago' value={format.date(paymentDate)} />
        </Grid>
        <Grid item xs={12} md={3}>
          <ItemCard label='Tipo de pago' value={type} />
        </Grid>
        {numCheque && (
          <Grid item xs={12} md={3}>
            <ItemCard label='Número de talón' value={numCheque} />
          </Grid>
        )}
        <Grid item xs={12} md={3}>
          <ItemCard label='Pagado' value={paid} variant='boolean' />
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

InvoicePayment.propTypes = {
  paymentDate: PropTypes.number,
  type: PropTypes.string,
  numCheque: PropTypes.string,
  paid: PropTypes.bool,
  className: PropTypes.string.isRequired,
};

InvoicePayment.displayName = 'InvoiceTotals';
export const story = InvoicePayment;
export default memo(InvoicePayment);
