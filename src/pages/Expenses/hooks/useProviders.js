import { useEffect } from 'react'
import useSWR from 'swr'
import { API_PROVIDERS } from 'constants/paths'
import { TYPE_PROVIDER } from 'constants/index'
import { useNotifications } from 'hooks'
import { createProviderApi } from 'services/apiService'

export const useProviders = () => {
  const {
    data,
    error,
    mutate
  } = useSWR(`${API_PROVIDERS}?type=${TYPE_PROVIDER.EXPENSES}`)
  const {
    showError,
    showSuccess
  } = useNotifications()

  useEffect(() => {
    if (error) {
      showError(error.message)
    }
  }, [error, data])

  const createProvider = (data, callback) => {
    createProviderApi({ ...data, type: TYPE_PROVIDER.EXPENSES })
      .then(({ data }) => {
        showSuccess('El proveedor se ha creado correctamente')
        callback()
        return mutate(data)
      })
      .catch((error) => {
        showError(error.message)
      })
  }

  return {
    providers: data || [],
    isLoading: !data,
    createProvider
  }
}
