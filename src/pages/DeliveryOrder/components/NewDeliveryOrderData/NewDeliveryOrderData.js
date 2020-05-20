import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {Card, CardContent, CardHeader, Divider, Grid} from '@material-ui/core';

import {DatePickerForm, SelectForm} from 'components';

const NewDeliveryOrderData = ({date, provider, providers, setData}) => {
  /**
   * Handle change input
   * @param {String} name
   * @param {String} value
   * @private
   */
  const _handleChange = ({target: {name, value}}) => {
    setData({[name]: value});
  };

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
      <Grid spacing={3} container>
        <DatePickerForm
          label='Fecha'
          value={date}
          onChange={_handleChangeDate}
        />
        <SelectForm
          label='Selecciona un proveedor'
          value={provider}
          name='provider'
          onChange={_handleChange}
        >
          <option value="">--------</option>
          {providers?.map(item => (
            <option key={item._id} value={item._id}>
              {item.name}
            </option>
          ))}
        </SelectForm>
      </Grid>
    </CardContent>
  </Card>
};

NewDeliveryOrderData.propTypes = {
  date: PropTypes.instanceOf(Date),
  setData: PropTypes.func.isRequired,
};

NewDeliveryOrderData.displayName = 'NewDeliveryOrderData';

export default memo(NewDeliveryOrderData);
