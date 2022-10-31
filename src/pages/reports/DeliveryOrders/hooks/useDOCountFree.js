import { useEffect } from 'react'
import useSWR from 'swr'

import { API_DELIVERY_ORDERS_COUNT_FREE } from 'constants/paths'
import { useNotifications } from 'hooks'

export const useDOCountFree = (year) => {
  const {
    data,
    error
  } = useSWR(`${API_DELIVERY_ORDERS_COUNT_FREE}/${year}`)
  const { showError } = useNotifications()

  useEffect(() => {
    if (error) {
      showError(error.message)
    }
  }, [error, data])

  return {
    doCount: data || [],
    isLoading: !data
  }
}
