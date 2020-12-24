import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  card: {
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(1),
  },
  header: {
    paddingBottom: 0,
  },
  content: {
    paddingTop: 0,
  },
}));
