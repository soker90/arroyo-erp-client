import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  root: {
    width: 'auto',
  },
  tooltip: {
    marginRight: 0,
    padding: 0,
  },
  actionIcon: {
    padding: theme.spacing(0.1),
    marginRight: theme.spacing(1),
  },
}));
