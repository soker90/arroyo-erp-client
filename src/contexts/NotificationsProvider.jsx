import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

const NotificationsContext = createContext(undefined)

export const NotificationsProvider = ({ children }) => {
  const [notification, setNotification] = useState(null)

  const addNotification = (newNotification) => {
    setNotification(newNotification)
  }

  return (
    <NotificationsContext.Provider
      value={{ notification, addNotification }}
    >
      {children}
    </NotificationsContext.Provider>
  )
}

NotificationsProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default NotificationsProvider
