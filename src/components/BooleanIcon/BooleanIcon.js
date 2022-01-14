import PropTypes from 'prop-types';
import clsx from 'clsx';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { useStyles } from './BooleanIcon.styles';

const BooleanIcon = (
  {
    className,
    value,
  },
) => {
  const classes = useStyles();

  return value
    ? (
      <CheckIcon
        data-testid='checkIcon'
        className={clsx(classes.iconActive, className)}
        fontSize='small'
      />
    )
    : (
      <CloseIcon
        data-testid='closeIcon'
        className={clsx(classes.iconInactive, className)}
        fontSize='small'
      />
    );
};

BooleanIcon.propTypes = {
  className: PropTypes.string,
  value: PropTypes.bool.isRequired,
};

BooleanIcon.displayName = 'BooleanIcon';

export const story = BooleanIcon;
export default BooleanIcon;
