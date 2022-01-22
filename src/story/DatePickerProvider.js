import PropTypes from 'prop-types';

import { LocalizationProvider } from '@mui/lab';
import AdapterMoment from '@mui/lab/AdapterMoment';

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
