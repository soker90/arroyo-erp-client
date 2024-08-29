import PropTypes from 'prop-types'
import {
  Grid,
  Typography
} from 'components'
import Label from 'components/Label'
import { format } from 'utils'

const DeliveryOrderSelectedSum = ({
  label, value
}) => {
  return (
    <Grid
      className='p-4 text-center border-r border-b'
      item
      md={3}
      sm={6}
      xs={12}
    >
      <div className='flex items-center justify-center'>
        <Typography
          component='span'
          variant='h4'
          color='textPrimary'
        >
          {format.euro(value)}
        </Typography>
        <Label
          className='ml-2'
          color='primary'
        >
          {label}
        </Label>
      </div>
    </Grid>
  )
}

DeliveryOrderSelectedSum.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired
}

DeliveryOrderSelectedSum.displayName = 'DeliveryOrderSelectedSum'
export default DeliveryOrderSelectedSum
