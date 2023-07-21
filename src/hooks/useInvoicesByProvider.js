import { useEffect, useReducer } from 'react'
import useSWR from 'swr'
import { API_INVOICES_SHORT } from 'constants/paths'
import { useNotifications } from 'hooks'
import { objectToParams } from 'utils'

export const useInvoicesByProvider = (providerId) => {
  const [filters, setFilters] = useReducer(
    (oldstate, newState) => ({ ...oldstate, ...newState }),
    { provider: providerId }
  )

  const {
    data,
    error,
    isLoading
  } = useSWR(() => `${API_INVOICES_SHORT}${objectToParams(filters)}`)
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
    invoices: data?.invoices || [],
    count: data?.count || 0,
    isLoading,
    filters,
    updateFilters,
  }
}
