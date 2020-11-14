import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  table: {
    marginTop: theme.spacing(2),
  },
  orders: {
    marginTop: theme.spacing(2),
  },
}));
