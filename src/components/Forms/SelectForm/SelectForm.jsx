import PropTypes from 'prop-types'
import { Grid, TextField } from '@mui/material'

/**
 * TODO: Cambiar por select con material o posibilitar elegir
 * nativo o material. Y documentar opcion y menuItem para usarlo
 * como children del componente.
 */
const SelectForm = ({
  size = 6, children, variant = 'standard', ...rest
}) => (
  <Grid
    item
    md={size}
    xs={12}
  >
    <TextField
      fullWidth
      select
      variant={variant}
      SelectProps={{
        native: true
      }}
      {...rest}
    >
      {children}
    </TextField>
  </Grid>
)

SelectForm.propTypes = {
  size: PropTypes.number,
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  variant: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired
}

SelectForm.displayName = 'SelectForm'

export const story = SelectForm
export default SelectForm
