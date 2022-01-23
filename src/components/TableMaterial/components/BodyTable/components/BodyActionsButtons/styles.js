import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()(theme => ({
  tooltip: {
    marginRight: theme.spacing(1.5),
    padding: 0,

  },
  actionIcon: {
    padding: theme.spacing(0.1),
  },
}));
