import { useEffect } from 'react'
import useSWR from 'swr'
import { API_PROVIDER } from 'constants/paths'
import { useNotifications } from 'hooks'

export const useProvider = (idProvider) => {
  const {
    data,
    error
  } = useSWR(() => `${API_PROVIDER}/${idProvider}`)
  const {
    showError
  } = useNotifications()

  useEffect(() => {
    if (error) {
      showError(error.message)
    }
  }, [error, data])

  return {
    provider: data || {},
    isLoading: !data
  }
}
