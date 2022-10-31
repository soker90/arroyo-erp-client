import { useEffect } from 'react'
import useSWR from 'swr'
import { API_CLIENT_INVOICES } from 'constants/paths'
import { useNotifications } from 'hooks'

export const useClientInvoices = (year) => {
  const { data, error } = useSWR(`${API_CLIENT_INVOICES}?year=${year}`)
  const { showError } = useNotifications()

  useEffect(() => {
    if (error) {
      showError(error.message)
    }
  }, [error, data])

  return { invoices: data || [], isLoading: !data }
}
