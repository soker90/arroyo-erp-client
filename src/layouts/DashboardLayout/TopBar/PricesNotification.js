import { memo } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import {
  Badge,
  IconButton,
  makeStyles,
  Tooltip,
} from '@material-ui/core';
import EuroIcon from '@material-ui/icons/Euro';
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
  badge: {
    marginTop: 10,
    marginRight: 5,
  },
});

const PricesNotification = () => {
  const { count } = useSelector(({ priceChanges }) => priceChanges);
  const classes = useStyles();
  return (
    <Tooltip title='Precios'>
      <Badge
        color='secondary'
        classes={{ badge: classes.badge }}
        badgeContent={count}
        max={99}
      >
        <IconButton
          color='inherit'
          component={RouterLink}
          to='/app/precios'
        >
          <EuroIcon />
        </IconButton>
      </Badge>
    </Tooltip>
  );
};

PricesNotification.displayName = 'PricesNotification';
export default memo(PricesNotification);
