
import PropTypes from 'prop-types';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

const DatePickerProvider = ({ children }) => (
  <MuiPickersUtilsProvider utils={MomentUtils}>
    {children}
  </MuiPickersUtilsProvider>
);

DatePickerProvider.propTypes = {
  children: PropTypes.oneOf([PropTypes.array, PropTypes.object]).isRequired,
};

export default DatePickerProvider;
