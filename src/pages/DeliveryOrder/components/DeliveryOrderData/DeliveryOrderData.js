import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {Card, CardContent, CardHeader, Divider} from '@material-ui/core';

import {DatePickerForm} from 'components';

const DeliveryOrderData = ({date, setData}) => {
  /**
   * Handle change date
   * @param {Date} value
   * @private
   */
  const _handleChangeDate = value => {
    setData({date: value});
  };

  return <Card>
    <CardHeader title='Datos del albarán'/>
    <Divider/>
    <CardContent>
      <DatePickerForm
        size={3}
        label='Fecha'
        value={date}
        onChange={_handleChangeDate}
      />
    </CardContent>
  </Card>;
};

DeliveryOrderData.propTypes = {
  date: PropTypes.instanceOf(Date),
  setData: PropTypes.func.isRequired,
};

DeliveryOrderData.displayName = 'DeliveryOrderData';

export default memo(DeliveryOrderData);
