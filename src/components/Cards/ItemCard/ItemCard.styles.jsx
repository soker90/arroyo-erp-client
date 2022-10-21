import makeStyles from '@mui/styles/makeStyles'
import { colors } from '@mui/material'

export const useStyles = makeStyles(theme => ({
  listItem: {
    padding: theme.spacing(2, 0),
    justifyContent: 'space-between'
  },
  label: {
    color: colors.teal[200]
  }
}))
