import React, { memo } from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardContent, CardHeader, Divider,
} from '@material-ui/core';

import { DatePickerForm } from 'components';

const DeliveryOrderData = ({ date, setDate, readOnly }) => (
  <Card>
    <CardHeader title='Datos del albarán' />
    <Divider />
    <CardContent>
      <DatePickerForm
        size={12}
        label='Fecha'
        value={date}
        onChange={setDate}
        readOnly={readOnly}
      />
    </CardContent>
  </Card>
);

DeliveryOrderData.propTypes = {
  date: PropTypes.number,
  setDate: PropTypes.func.isRequired,
  readOnly: PropTypes.bool.isRequired,
};

DeliveryOrderData.displayName = 'DeliveryOrderData';
export const story = DeliveryOrderData;
export default memo(DeliveryOrderData);
