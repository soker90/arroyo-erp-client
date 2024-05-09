import { useEffect, useState } from 'react'
import useSWR from 'swr'
import { API_INVOICES_CHEQUES } from 'constants/paths'
import { useNotifications } from 'hooks'
import { objectToParams } from 'utils'

export const useCheques = (defaultFilters) => {
  const [filters, setFilters] = useState(defaultFilters)
  const {
    data, error
  } = useSWR(`${API_INVOICES_CHEQUES}${objectToParams(filters)}`)
  const {
    showError
  } = useNotifications()

  useEffect(() => {
    if (error) {
      showError(error.message)
    }
  }, [error, data])

  const updateFilters = (newFilters) => {
    setFilters(newFilters)
  }

  return {
    cheques: data?.cheques || [], count: data?.count || 0, isLoading: !data, updateFilters
  }
}
