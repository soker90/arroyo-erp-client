import makeStyles from '@mui/styles/makeStyles'

export const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  },
  table: {
    marginTop: theme.spacing(3)
  },
  unread: {
    backgroundColor: theme.palette.action.selected
  }
}))
