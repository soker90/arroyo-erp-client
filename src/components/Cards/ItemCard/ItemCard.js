import React, { memo } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { ListItem, Typography } from '@material-ui/core';

import { BooleanIcon } from 'components';
import { useStyles } from './ItemCard.styles';

const ItemCard = ({
  label, value, divider, className,
}) => {
  const classes = useStyles();

  return (
    <ListItem
      className={clsx(classes.listItem, className)}
      disableGutters
      divider={divider}
    >
      <Typography variant='subtitle2'>{label}</Typography>

      {
        typeof value === 'boolean'
          ? <BooleanIcon value={value} />
          : (
            <Typography variant='h6'>
              {value}
            </Typography>
          )
      }

    </ListItem>
  );
};

ItemCard.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.any,
  divider: PropTypes.bool,
  className: PropTypes.string,
};

ItemCard.defaultProps = {
  divider: true,
};

ItemCard.displayName = 'ItemCard';

export const story = ItemCard;
export default memo(ItemCard);
