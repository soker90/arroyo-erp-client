import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  root: {
    width: 'auto',
    overflowX: 'visible',
  },
  tooltip: {
    marginRight: theme.spacing(1.5),
    padding: 0,

  },
  actionIcon: {
    padding: theme.spacing(0.1),
  },
  cell: {
    textDecoration: 'none',
    color: 'inherit',
  },
}));
