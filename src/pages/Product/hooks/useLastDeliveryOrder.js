import { useEffect } from 'react'
import useSWR from 'swr'
import { API_PRODUCTS_LAST_ORDER } from 'constants/paths'
import { useNotifications } from 'hooks'

export const useLastDeliveryOrder = (id) => {
  const {
    data,
    error
  } = useSWR(`${API_PRODUCTS_LAST_ORDER}/${id}`)
  const {
    showError
  } = useNotifications()

  useEffect(() => {
    if (error) {
      showError(error.message)
    }
  }, [error, data])

  return {
    last: data?.last,
    nextToLast: data?.nextToLast,
    isLoading: !data
  }
}
