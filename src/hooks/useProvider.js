import { useEffect } from 'react'
import useSWR from 'swr'
import { API_PROVIDERS } from 'constants/paths'
import { useNotifications } from 'hooks'
import { updateProviderApi } from 'services/apiService'

export const useProvider = (idProvider) => {
  const {
    data,
    error,
    mutate
  } = useSWR(() => `${API_PROVIDERS}/${idProvider}`)
  const {
    showError,
    showSuccess
  } = useNotifications()

  useEffect(() => {
    if (error) {
      showError(error.message)
    }
  }, [error, data])

  const editProvider = ({ type, ...data }, callback) => {
    updateProviderApi(idProvider, data).then(() => {
      showSuccess(`${data.name} ha sido actualizado`)
      callback()
      return mutate()
    })
      .catch((error) => {
        showError(error.message)
      })
  }

  return {
    provider: data?.provider || {},
    billing: data?.billing || {},
    isLoading: !data,
    editProvider
  }
}
