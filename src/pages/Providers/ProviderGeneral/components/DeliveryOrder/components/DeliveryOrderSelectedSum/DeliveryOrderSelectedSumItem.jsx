import PropTypes from 'prop-types'
import {
  Box,
  Grid,
  Typography
} from '@mui/material'
import Label from 'components/Label'
import { format } from 'utils'
import { useStyles } from './styles'

const DeliveryOrderSelectedSum = ({
  label, value
}) => {
  const classes = useStyles()

  return (
    <Grid
      className={classes.item}
      item
      md={3}
      sm={6}
      xs={12}
    >
      <Box
        display='flex'
        alignItems='center'
        justifyContent='center'
      >
        <Typography
          component='span'
          variant='h4'
          color='textPrimary'
        >
          {format.euro(value)}
        </Typography>
        <Label
          className={classes.label}
          color='primary'
        >
          {label}
        </Label>
      </Box>
    </Grid>
  )
}

DeliveryOrderSelectedSum.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired
}

DeliveryOrderSelectedSum.displayName = 'DeliveryOrderSelectedSum'
export default DeliveryOrderSelectedSum
