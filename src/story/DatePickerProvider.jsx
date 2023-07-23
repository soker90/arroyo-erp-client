import PropTypes from 'prop-types'

import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

const DatePickerProvider = ({
  children
}) => (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    {children}
  </LocalizationProvider>
)

DatePickerProvider.propTypes = {
  children: PropTypes.any
}

export default DatePickerProvider
