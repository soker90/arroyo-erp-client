import makeStyles from '@mui/styles/makeStyles';
import { colors } from '@mui/material';

export const useStyles = makeStyles(theme => ({
  iconActive: {
    color: colors.green[600],
  },
  iconInactive: {
    color: theme.palette.error.main,
  },
}));
