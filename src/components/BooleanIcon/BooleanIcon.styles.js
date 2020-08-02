import { makeStyles } from '@material-ui/core/styles';
import { colors } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  iconActive: {
    color: colors.green[600],
  },
  iconInactive: {
    color: theme.palette.error.main,
  },
}));
