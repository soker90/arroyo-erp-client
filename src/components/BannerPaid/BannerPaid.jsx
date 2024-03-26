// import { Alert } from '@mui/material'
import PropTypes from 'prop-types'
import { Alert } from 'components'
import { format } from 'utils'

const BannerPaid = ({
  paid,
  paymentDate,
  paymentType,
  className
}) => (
  <Alert severity={paid ? 'success' : 'error'} className={className}>
    {!paid && 'NO '}
    PAGADO
    {paid && ` el ${format.date(paymentDate)} con ${paymentType}`}
  </Alert>
)

BannerPaid.propTypes = {
  className: PropTypes.string,
  paid: PropTypes.bool,
  paymentDate: PropTypes.number,
  paymentType: PropTypes.string
}

export default BannerPaid
