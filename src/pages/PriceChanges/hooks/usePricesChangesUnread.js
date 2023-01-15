import { useEffect } from 'react'
import useSWR from 'swr'
import { API_PRICES_CHANGES_UNREAD_COUNT } from 'constants/paths'
import { useNotifications } from 'hooks'

export const usePricesChangesUnread = () => {
  const {
    data,
    error
  } = useSWR(API_PRICES_CHANGES_UNREAD_COUNT)
  const {
    showError

  } = useNotifications()

  useEffect(() => {
    if (error) {
      showError(error.message)
    }
  }, [error, data])

  return {
    count: data || 0,
    isLoading: !data
  }
}
