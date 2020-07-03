import React, { memo } from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardContent, CardHeader, Divider, Grid,
} from '@material-ui/core';

import { DatePickerForm, ItemCard } from 'components';

const InvoiceData = ({
  dateRegister, dateInvoice, nInvoice, nOrder, setDate,
}) => (
  <Card>
    <CardHeader title="Datos de la factura" />
    <Divider />
    <CardContent>
      <Grid spacing={3} container>
        <Grid item xs={12} md={6}>
          <ItemCard label="Nº Orden" value={nOrder} />
        </Grid>
        <Grid item xs={12} md={6}>
          <ItemCard label="Nº Factura" value={nInvoice} />
        </Grid>
        <DatePickerForm
          size={6}
          label="Fecha de registro"
          value={dateRegister}
          onChange={setDate}
        />
        <DatePickerForm
          size={6}
          label="Fecha de factura"
          value={dateInvoice}
          onChange={setDate}
        />
      </Grid>
    </CardContent>
  </Card>
);

InvoiceData.propTypes = {
  dateRegister: PropTypes.number,
  dateInvoice: PropTypes.number,
  setDate: PropTypes.func.isRequired,
  nInvoice: PropTypes.string,
  nOrder: PropTypes.number.isRequired,
};

InvoiceData.displayName = 'InvoiceData';
export const story = InvoiceData;
export default memo(InvoiceData);
