import { useEffect } from 'react'
import useSWR from 'swr'
import { API_CLIENTS } from 'constants/paths'
import { useNotifications } from 'hooks'

export const useClients = () => {
  const { data, error } = useSWR(API_CLIENTS)
  const { showError } = useNotifications()

  useEffect(() => {
    if (error) {
      showError(error.message)
    }
  }, [error, data])

  return { clients: data || [], isLoading: !data }
}