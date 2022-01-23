import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()(theme => ({
  root: {
    marginTop: theme.spacing(2),
  },
  total: {
    marginLeft: theme.spacing(2),
  },
}));
