import { useEffect } from 'react'
import useSWR from 'swr'
import { API_INVOICES_TOTALS } from 'constants/paths'
import { TALON_PAYMENT } from 'constants/index'
import { useNotifications } from 'hooks'

export const useTotals = (year) => {
  const {
    data,
    error
  } = useSWR(`${API_INVOICES_TOTALS}?year=${year}&type=${TALON_PAYMENT}`)
  const {
    showError
  } = useNotifications()

  useEffect(() => {
    if (error) {
      showError(error.message)
    }
  }, [error, data])

  return {
    totals: data || [],
    isLoading: !data
  }
}
