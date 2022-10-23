import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

const NotificationsContext = createContext()

export const notificationDefaultParams = {
  message: '',
  level: 'success', // success | error | warning | info
  position: 'tr', // tr | tl | tc | br | bl | bc
  autoDismiss: 2000
}

export const NotificationsProvider = ({ children }) => {
  const [notification, setNotification] = useState(null)

  const addNotification = (notificationConfig) => {
    setNotification({ ...notificationDefaultParams, ...notificationConfig })
  }

  const showError = (message) => {
    setNotification({
      level: 'error',
      message,
      autoDismiss: 6000,
      dismissible: true
    })
  }

  const showSuccess = (message) => {
    setNotification({
      message,
      level: 'success',
      position: 'tr',
      autoDismiss: 2000
    })
  }

  const clearNotification = () => {
    setNotification(null)
  }

  return (
    <NotificationsContext.Provider
      value={{
        notification,
        addNotification,
        showError,
        clearNotification,
        showSuccess
      }}
    >
      {children}
    </NotificationsContext.Provider>
  )
}

NotificationsProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default NotificationsContext
