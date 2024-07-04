import PropTypes from 'prop-types'
import { FormControlLabel, Switch } from '@mui/material'
import { Grid } from 'components'

const SwitchForm = ({
  size = 6,
  label,
  color = 'primary',
  ...rest
}) => (
  <Grid
    item
    md={size}
    xs={12}
  >
    <FormControlLabel
      control={(
        <Switch
          color={color}
          {...rest}
        />
      )}
      label={label}
    />
  </Grid>
)

SwitchForm.propTypes = {
  size: PropTypes.number,
  label: PropTypes.string,
  checked: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
  color: PropTypes.string,
  disabled: PropTypes.bool
}

export default SwitchForm
