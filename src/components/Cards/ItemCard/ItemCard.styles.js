import makeStyles from '@material-ui/core/styles/makeStyles';
import { colors } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  listItem: {
    padding: theme.spacing(2, 0),
    justifyContent: 'space-between',
  },
  label: {
    color: colors.teal[200],
  },
}));
