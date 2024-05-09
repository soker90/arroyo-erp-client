import makeStyles from '@mui/styles/makeStyles'

export const useStyles = makeStyles(theme => ({
  rowRed: {
    '& > *': {
      color: theme.palette.error.dark
    }
  }
}))
