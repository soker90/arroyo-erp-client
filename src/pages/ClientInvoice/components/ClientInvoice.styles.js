import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  cards: {
    marginTop: theme.spacing(2),
  },
  orders: {
    marginTop: theme.spacing(2),
  },
  banner: {
    marginBottom: theme.spacing(1),
  },
}));
