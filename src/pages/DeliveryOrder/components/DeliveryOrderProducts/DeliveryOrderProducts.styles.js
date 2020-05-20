import {makeStyles} from '@material-ui/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(3),
  },
  buttons: {
    marginTop: theme.spacing(2),
    textAlign: 'right',
  },
}));
