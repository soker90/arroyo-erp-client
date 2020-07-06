import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none',
    zIndex: theme.zIndex.appBar,
  },
}));
