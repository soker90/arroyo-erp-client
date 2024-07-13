import PropTypes from 'prop-types'
import { Grid } from 'components'

/**
 * TODO: Cambiar por select con material o posibilitar elegir
 * nativo o material. Y documentar opcion y menuItem para usarlo
 * como children del componente.
 */
const SelectForm = ({
  size = 6, children, variant = 'standard', label, name, ...rest
}) => (
  <Grid
    item
    md={size}
    xs={12}
    className='space-y-2'
  >
    <label
      className='font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted-foreground'
      htmlFor={name}
    >{label}
    </label>
    <select
      className='w-full appearance-none px-4 py-2 pr-8 leading-tight bg-transparent text-foreground border-b border-muted-foreground focus:outline-none focus:border-primary disabled:cursor-not-allowed disabled:opacity-50'
      name={name}
      {...rest}
    >
      {children}
    </select>
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
