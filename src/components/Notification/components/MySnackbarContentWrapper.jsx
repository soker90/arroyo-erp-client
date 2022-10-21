import PropTypes from 'prop-types'
import clsx from 'clsx'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ErrorIcon from '@mui/icons-material/Error'
import InfoIcon from '@mui/icons-material/Info'
import CloseIcon from '@mui/icons-material/Close'
import SnackbarContent from '@mui/material/SnackbarContent'
import WarningIcon from '@mui/icons-material/Warning'
import IconButton from '@mui/material/IconButton'
import { forwardRef } from 'react'
import { useStyles } from './MySnackbarContentWrapper.styles'

const MySnackbarContentWrapper = forwardRef(({
  className,
  message,
  onClose,
  variant,
  ...other
}, ref) => {
  const classes = useStyles()

  const variantIcon = {
    success: CheckCircleIcon,
    warning: WarningIcon,
    error: ErrorIcon,
    info: InfoIcon
  }

  const Icon = variantIcon?.[variant]

  return (
    <SnackbarContent
      ref={ref}
      className={clsx(classes?.[variant], className)}
      aria-describedby='client-snackbar'
      message={(
        <span id='client-snackbar' className={classes.message} data-cy='notification'>
          <Icon className={clsx(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      )}
      action={(
        <IconButton
          key='close'
          aria-label='close'
          color='inherit'
          onClick={onClose}
          data-cy='notification-btn-close'
          size='large'
        >
          <CloseIcon className={classes.icon} />
        </IconButton>
      )}
      {...other}
    />
  )
})

MySnackbarContentWrapper.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(['error', 'info', 'success', 'warning']).isRequired
}

MySnackbarContentWrapper.displayName = 'MySnackbarContentWrapper'

export const story = MySnackbarContentWrapper
export default MySnackbarContentWrapper
