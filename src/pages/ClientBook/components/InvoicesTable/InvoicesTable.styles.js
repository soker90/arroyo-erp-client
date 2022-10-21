import makeStyles from '@mui/styles/makeStyles'

export const useStyles = makeStyles(theme => ({
  table: {
    marginTop: theme.spacing(2)
  },
  rowRed: {
    '& > *': {
      color: theme.palette.error.dark
    }
  }
}))
