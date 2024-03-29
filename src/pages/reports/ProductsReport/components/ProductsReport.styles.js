import makeStyles from '@mui/styles/makeStyles'

export const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  },
  container: {
    marginTop: theme.spacing(2)
  },
  charts: {
    position: 'sticky',
    top: '1.5rem'
  },
  secondChart: {
    marginTop: theme.spacing(2)
  }
}))
