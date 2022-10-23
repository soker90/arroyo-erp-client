import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

const NotificationsContext = createContext()

export const NotificationsProvider = ({ children }) => {
  const [notification, setNotification] = useState(null)

  const addNotification = (newNotification) => {
    setNotification(newNotification)
  }

  const showError = (message) => {
    setNotification({
      level: 'error',
      message,
      autoDismiss: 6000,
      dismissible: true
    })
  }

  const clearNotification = () => {
    setNotification(null)
  }

  return (
    <NotificationsContext.Provider
      value={{ notification, addNotification, showError, clearNotification }}
    >
      {children}
    </NotificationsContext.Provider>
  )
}

NotificationsProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default NotificationsContext
