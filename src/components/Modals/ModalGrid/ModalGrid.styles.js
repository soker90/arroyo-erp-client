import {makeStyles} from '@material-ui/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    outline: 'none',
    boxShadow: theme.shadows[20],
    width: 700,
    maxHeight: '100%',
    overflowY: 'auto',
    maxWidth: '100%',
  },
  actions: {
    justifyContent: 'flex-end',
  },
  buttonAccept: {
    color: theme.palette.white,
    backgroundColor: theme.palette.button.success.root,
    '&:hover': {
      backgroundColor: theme.palette.button.success.hover,
    },
  },
  buttonCancel: {
    color: theme.palette.white,
    backgroundColor: theme.palette.button.danger.root,
    '&:hover': {
      backgroundColor: theme.palette.button.danger.hover,
    },
  },
}));