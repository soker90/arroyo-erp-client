import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()(theme => ({
  root: {},
  grid: {
    width: '100%',
    paddingBottom: theme.spacing(3),
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    // marginLeft: theme.spacing(2),
  },
  listFirst: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('lg')]: {
      marginLeft: theme.spacing(2),
    },
  },
}));
