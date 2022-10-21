import PropTypes from 'prop-types';
import clsx from 'clsx';
import { ListItem, Typography } from '@mui/material';

import ItemCardVariant from './ItemCard.variants';
import { useStyles } from './ItemCard.styles';

const ItemCard = ({
  label, value, divider, className, variant,
}) => {
  const classes = useStyles();

  return (
    <ListItem
      className={clsx(classes.listItem, className)}
      disableGutters
      divider={divider}
    >
      <Typography variant='subtitle2' className={classes.label}>{label}</Typography>
      <ItemCardVariant value={value} variant={variant} />

    </ListItem>
  );
};

ItemCard.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.any,
  divider: PropTypes.bool,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'boolean', 'euro']),
};

ItemCard.defaultProps = {
  divider: true,
  variant: 'default',
};

ItemCard.displayName = 'ItemCard';

export const story = ItemCard;
export default ItemCard;
