import { memo } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import {
  Badge,
  IconButton,
  Tooltip,
} from '@mui/material';
import EuroIcon from '@mui/icons-material/Euro';
import { useSelector } from 'react-redux';
import makeStyles from '@mui/styles/makeStyles';

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
        <IconButton color='inherit' component={RouterLink} to='/app/precios' size='large'>
          <EuroIcon />
        </IconButton>
      </Badge>
    </Tooltip>
  );
};

PricesNotification.displayName = 'PricesNotification';
export default memo(PricesNotification);
