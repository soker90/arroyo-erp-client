import { memo } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import { useStyles } from './BooleanIcon.styles';

const BooleanIcon = (
  {
    className, value,
  }
) => {
  const classes = useStyles();

  return value
    ? <CheckIcon className={clsx(classes.iconActive, className)} fontSize='small' />
    : <CloseIcon className={clsx(classes.iconInactive, className)} fontSize='small' />;
};

BooleanIcon.propTypes = {
  className: PropTypes.string,
  value: PropTypes.bool.isRequired,
};

BooleanIcon.displayName = 'BooleanIcon';

export const story = BooleanIcon;
export default memo(BooleanIcon);
