import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  table: {
    marginTop: theme.spacing(2),
  },
  search: {
    marginTop: theme.spacing(2),
    paddingRight: theme.spacing(3),
    marginBottom: -theme.spacing(10),
  },
}));
