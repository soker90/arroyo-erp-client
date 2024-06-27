import PropTypes from 'prop-types'
import { format } from 'utils'
import clsx from 'clsx'

const TextEuro = ({
  num, Component = 'span', className, decimals = 2, ...rest
}) => {
  const getColorAmount = (num < 0 ? 'text-red-600' : '')

  return (
    <Component
      className={clsx(getColorAmount, className)}
      {...rest}
    >
      {format.euro(num, { maximumFractionDigits: decimals })}
    </Component>
  )
}

TextEuro.propTypes = {
  num: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  Component: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  className: PropTypes.string,
  decimals: PropTypes.number
}

export default TextEuro
