import { makeStyles } from '@material-ui/core/styles';
import { colors } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  default: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  success: {
    backgroundColor: colors.green[600],
    color: theme.palette.common.white,
  },
  info: {
    backgroundColor: colors.lightBlue[600],
    color: theme.palette.common.white,
  },
  warning: {
    backgroundColor: colors.orange[900],
    color: theme.palette.common.white,
  },
  error: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: 'flex',
    alignItems: 'center',
    color: '#fff',
  },
}));
