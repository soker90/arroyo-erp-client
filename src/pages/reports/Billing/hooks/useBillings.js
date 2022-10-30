import { useEffect } from 'react'
import useSWR from 'swr'
import { API_BILLINGS } from 'constants/paths'
import { useNotifications } from 'hooks'

export const useBillings = (year) => {
  const { data, error } = useSWR(`${API_BILLINGS}?year=${year}`)
  const { showError } = useNotifications()

  useEffect(() => {
    if (error) {
      showError(error.message)
    }
  }, [error, data])

  return { billings: data || [], isLoading: !data }
}
