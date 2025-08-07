import PropTypes from 'prop-types'

import { cn } from 'utils'

const TextField = ({ className, name, label, inputRef, ...props }) => (
  <div className={cn('space-y-2', className)}>
    <label
      className='font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted-foreground'
      htmlFor={name}
    >{label}
    </label>
    <input
      name={name}
      className={cn(
        'flex w-full px-2 py-1 bg-transparent disabled:cursor-not-allowed disabled:opacity-50 text-foreground border-b border-muted-foreground focus:outline-hidden focus:border-primary',
        className
      )}
      ref={inputRef}
      {...props}
    />
  </div>
)

TextField.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  variant: PropTypes.string,
  placeholder: PropTypes.string
}

export { TextField }
