import PropTypes from 'prop-types'
import { Grid, TextField } from '@mui/material'

/**
 * BUG: Si cuando cargue el input el label y el value se superpone,
 * es porque el label es undefined o null, si al mandar la prop
 * value se manda como value={mivalor || ' '} se soluciona
 */
const InputForm = ({
  size = 6, variant = 'standard', disabled = false, ...rest
}) => (
  <Grid
    item
    md={size}
    xs={12}
  >
    <TextField
      fullWidth
      disabled={disabled}
      variant={variant}
      {...rest}
    />
  </Grid>
)

InputForm.propTypes = {
  size: PropTypes.number,
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  variant: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool
}

InputForm.displayName = 'InputForm'

export const story = InputForm
export default InputForm
