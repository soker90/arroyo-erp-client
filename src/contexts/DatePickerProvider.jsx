import PropTypes from 'prop-types'

const DatePickerProvider = ({ children }) => (
  <DatePickerProvider>
    {children}
  </DatePickerProvider>
)

DatePickerProvider.propTypes = {
  children: PropTypes.oneOf([PropTypes.array, PropTypes.object]).isRequired
}

export default DatePickerProvider
