import PropTypes from 'prop-types'
import { Grid } from 'components'
import { cn } from 'utils'

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
    className='flex'
  >
    <label className='inline-flex items-center cursor-pointer'>
      <input type='checkbox' value='' className='sr-only peer' {...rest} />
      <div
        className={cn("relative w-11 h-6 bg-gray-200 rounded-full dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:rtl:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300  after:rounded-full after:h-5 after:w-5 after:transition-all",
          color ? `peer-checked:bg-${color}` : 'peer-checked:bg-primary',
          'peer-focus:ring-2 peer-focus:ring-primary '
        )}
      />
      <span className='ms-3 text-sm font-medium text-gray-900 dark:text-gray-300'>{label}</span>
    </label>

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
