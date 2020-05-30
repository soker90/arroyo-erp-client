import React, { memo } from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardContent, CardHeader, Divider,
} from '@material-ui/core';

import { DatePickerForm } from 'components';

const DeliveryOrderData = ({ date, setDate }) => (
  <Card>
    <CardHeader title="Datos del albarán" />
    <Divider />
    <CardContent>
      <DatePickerForm
        size={3}
        label="Fecha"
        value={date}
        onChange={setDate}
      />
    </CardContent>
  </Card>
);

DeliveryOrderData.propTypes = {
  date: PropTypes.number,
  setDate: PropTypes.func.isRequired,
};

DeliveryOrderData.displayName = 'DeliveryOrderData';
export const story = DeliveryOrderData;
export default memo(DeliveryOrderData);
