import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()(theme => ({
  root: {
    boxShadow: 'none',
    zIndex: theme.zIndex.appBar,
  },
}));
