import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  card: {
    marginTop: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(1.5),
    maxHeight: theme.spacing(5),
  },
}));
