import { memo } from 'react';
import PropTypes from 'prop-types';
import AdapterMoment from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

const DatePickerProvider = ({ children }) => (
  <LocalizationProvider dateAdapter={AdapterMoment}>
    {children}
  </LocalizationProvider>
);

DatePickerProvider.propTypes = {
  children: PropTypes.oneOf([PropTypes.array, PropTypes.object]).isRequired,
};

export default memo(DatePickerProvider);
