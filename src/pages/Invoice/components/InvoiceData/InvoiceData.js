import React, { memo } from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardContent, CardHeader, Divider,
} from '@material-ui/core';

import { DatePickerForm } from 'components';

const InvoiceData = ({ date, setDate }) => (
  <Card>
    <CardHeader title="Datos de la factura" />
    <Divider />
    <CardContent>
      <DatePickerForm
        size={3}
        label="Fecha de registro"
        value={date}
        onChange={setDate}
      />
      <DatePickerForm
        size={3}
        label="Fecha de factura"
        value={date}
        onChange={setDate}
      />
    </CardContent>
  </Card>
);

InvoiceData.propTypes = {
  date: PropTypes.number,
  setDate: PropTypes.func.isRequired,
};

InvoiceData.displayName = 'InvoiceData';
export const story = InvoiceData;
export default memo(InvoiceData);
