import PropTypes from 'prop-types'
import { cva } from 'class-variance-authority'

import { cn } from 'utils'

const labelVariants = cva(
  'items-center rounded-sm inline-flex flex-grow-0 whitespace-nowrap flex-shrink-0 text-xs font-medium h-5 justify-center tracking-wider min-w-[20px] px-2 py-1 uppercase',
  {
    variants: {
      color: {
        primary: 'text-primary bg-primary/10',
        secondary: 'text-secondary bg-secondary/10',
        error: 'text-destructive bg-destructive/10',
        warning: 'text-warning bg-warning/10',
        success: 'text-success bg-success/10'
      }
    }
  }
)

const Label = ({
  className,
  color = 'secondary',
  children,
  style,
  ...rest
}) => {
  return (
    <span
      className={
        cn(labelVariants({ color }), className)
      }
      {...rest}
    >
      {children}
    </span>
  )
}

Label.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  color: PropTypes.oneOf(['primary', 'secondary', 'error', 'warning', 'success'])
}

export default Label
