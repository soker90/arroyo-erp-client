import PropTypes from 'prop-types';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

const DatePickerProvider = ({
  children,
}) => (
  <LocalizationProvider dateAdapter={AdapterMoment}>
    {children}
  </LocalizationProvider>
);

DatePickerProvider.propTypes = {
  children: PropTypes.any,
};

export default DatePickerProvider;
