import { useEffect } from 'react'
import NotificationWrapper from './NotificationWrapper'
import { useNotifications } from 'hooks'

const Notification = () => {
  const { notification, clearNotification } = useNotifications()

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        clearNotification()
      }, notification.autoDismiss)

      return () => clearTimeout(timer)
    }
  }, [notification, clearNotification])

  if (!notification) return null

  const handleClose = () => {
    clearNotification()
  }

  return (
    <div className='fixed z-[1500] top-16 left-1/2 transform -translate-x-1/2'>
      <NotificationWrapper
        onClose={handleClose}
        variant={notification.level}
        message={notification.message}
      />
    </div>
  )
}

export default Notification
