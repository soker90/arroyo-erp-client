import { useEffect } from 'react'
import useSWR from 'swr'
import { API_PROVIDERS } from 'constants/paths'
import { useNotifications } from 'hooks'

export const useProvider = (idProvider) => {
  const {
    data,
    error
  } = useSWR(() => `${API_PROVIDERS}/${idProvider}`)
  const {
    showError
  } = useNotifications()

  useEffect(() => {
    if (error) {
      showError(error.message)
    }
  }, [error, data])

  return {
    provider: data?.provider || {},
    billing: data?.billing || {},
    isLoading: !data
  }
}
