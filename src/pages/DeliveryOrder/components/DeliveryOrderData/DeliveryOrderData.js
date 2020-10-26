import { memo } from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardContent, CardHeader, Divider,
} from '@material-ui/core';

import { DatePickerForm, InputForm } from 'components';
import { useStyles } from './DeliveryOrderData.styles';

const DeliveryOrderData = ({
  date, readOnly, updateData, note,
}) => {
  const classes = useStyles();

  const _handleChangeDate = value => {
    updateData({ date: value });
  };

  const _handleKeyDownNote = ({ key, target: { value } }) => {
    if (key === 'Enter') updateData({ note: value });
  };

  return (
    <Card>
      <CardHeader title='Datos del albarán' />
      <Divider />
      <CardContent>
        <DatePickerForm
          size={12}
          label='Fecha'
          value={date}
          onChange={_handleChangeDate}
          readOnly={readOnly}
        />
        {date && (
        <InputForm
          size={12}
          label='Notas'
          className={classes.notes}
          defaultValue={note}
          onKeyDown={_handleKeyDownNote}
        />
        )}
      </CardContent>
    </Card>
  );
};

DeliveryOrderData.propTypes = {
  date: PropTypes.number,
  note: PropTypes.string,
  readOnly: PropTypes.bool.isRequired,
  updateData: PropTypes.func.isRequired,
};

DeliveryOrderData.displayName = 'DeliveryOrderData';
export const story = DeliveryOrderData;
export default memo(DeliveryOrderData);
