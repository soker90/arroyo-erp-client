import { useContext } from 'react'
import NotificationsContext from 'contexts/NotificationsProvider'

export const useNotifications = () => {
  const context = useContext(NotificationsContext)

  return context
}
