import PropTypes from 'prop-types';
import { format } from 'utils';
import clsx from 'clsx';
import { useStyles } from './styles';

const TextEuro = ({
  num, Component = 'span', className, decimals = 2, ...rest
}) => {
  const classes = useStyles();
  const getColorAmount = (num < 0 ? classes.red : '');

  return (
    <Component
      className={clsx(getColorAmount, className)}
      {...rest}
    >
      {format.euro(num, { maximumFractionDigits: decimals })}
    </Component>
  );
};

TextEuro.propTypes = {
  num: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  Component: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  className: PropTypes.string,
  decimals: PropTypes.number,
};

TextEuro.displayName = 'TextEuro';
export const story = TextEuro;
export default TextEuro;
