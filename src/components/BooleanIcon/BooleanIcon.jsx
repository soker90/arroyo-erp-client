import { X, Check } from 'lucide-react'
import PropTypes from 'prop-types'

import { cn } from 'utils'

const BooleanIcon = (
  {
    className,
    value
  }
) => (
  value
    ? (
      <Check
        data-testid='checkIcon'
        className={cn('text-green-600', className)}
        fontSize='small'
      />
      )
    : (
      <X
        data-testid='closeIcon'
        className={cn('text-red-600', className)}
        fontSize='small'
      />
      )
)

BooleanIcon.propTypes = {
  className: PropTypes.string,
  value: PropTypes.bool.isRequired
}

export default BooleanIcon
