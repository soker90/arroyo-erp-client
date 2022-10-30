import { useEffect } from 'react'
import useSWR from 'swr'
import { API_BILLINGS_CLIENTS } from 'constants/paths'
import { useNotifications } from 'hooks'

export const useClientsBillings = (year) => {
  const {
    data,
    error
  } = useSWR(`${API_BILLINGS_CLIENTS}?year=${year}`)
  const { showError } = useNotifications()

  useEffect(() => {
    if (error) {
      showError(error.message)
    }
  }, [error, data])

  return {
    billings: data || [],
    isLoading: !data
  }
}
