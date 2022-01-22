import makeStyles from '@mui/styles/makeStyles';
import { colors } from '@mui/material';

export const useStyles = makeStyles(({
  iconActive: {
    color: colors.green[600],
  },
  iconInactive: {
    color: colors.red[600],
  },
}));
