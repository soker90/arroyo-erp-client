import { forwardRef } from 'react'
import PropTypes from 'prop-types'

import { cn } from 'utils'

const TextField = forwardRef(({ className, name, label, ...props }, ref) => (
  <div ref={ref} className={cn('space-y-2', className)}>
    <label
      className='font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted-foreground'
      htmlFor={name}
    >{label}
    </label>
    <input
      name={name}
      className={cn(
        'flex h-12 w-full rounded-md border px-3 py-2 bg-transparent disabled:cursor-not-allowed disabled:opacity-50 text-foreground',
        className
      )}
      ref={ref}
      {...props}
    />
  </div>
))

TextField.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  variant: PropTypes.string,
  placeholder: PropTypes.string
}

export { TextField }
