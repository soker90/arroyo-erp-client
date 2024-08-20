import PropTypes from 'prop-types'
import { cn } from 'utils'

const Paper = ({ children, className }) => {
  return (
    <div className={cn('first-of-type:rounded-t bg-background', className)}>{children}</div>
  )
}

Paper.propTypes = {
  children: PropTypes.node.isRequired
}

export default Paper
