import { useState, useEffect } from 'react'
import Snackbar from '@mui/material/Snackbar'

import { useNotifications } from 'hooks'
import MySnackbarContentWrapper from './MySnackbarContentWrapper'
import { useStyles } from './Notification.styles'

const Notification = () => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const { notification, clearNotification } = useNotifications()

  useEffect(() => {
    if (notification?.message) setOpen(true)
  }, [notification])

  if (!notification) return null

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return
    clearNotification()
    setOpen(false)
  }

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center'
      }}
      open={open}
      autoHideDuration={5000 || notification.autoDismiss}
      onClose={handleClose}
      className={classes.root}
    >
      <MySnackbarContentWrapper
        onClose={handleClose}
        variant={notification.level || 'success'}
        message={notification.message}
      />
    </Snackbar>
  )
}

export default Notification
