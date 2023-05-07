import { useEffect, useReducer } from 'react'
import useSWR from 'swr'
import { API_DELIVERY_ORDERS } from 'constants/paths'
import { useNotifications } from 'hooks'
import { objectToParams } from 'utils'

export const useDeliveryOrders = (initialFilters) => {
  const [filters, setFilters] = useReducer(
    (oldstate, newState) => ({ ...oldstate, ...newState }),
    initialFilters
  )

  const {
    data,
    error,
    isLoading
  } = useSWR(() => `${API_DELIVERY_ORDERS}${objectToParams(filters)}`)
  const { showError } = useNotifications()

  useEffect(() => {
    if (error) {
      showError(error.message)
    }
  }, [error, data])

  const updateFilters = (newFilters) => {
    setFilters(newFilters)
  }

  return {
    free: data?.free || [],
    inInvoices: data?.inInvoices || {},
    isLoading,
    filters,
    setFilters,
    updateFilters
  }
}
