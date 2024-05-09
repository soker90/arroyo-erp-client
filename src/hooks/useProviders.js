import { useEffect } from 'react'
import useSWR from 'swr'
import { API_PROVIDERS } from 'constants/paths'
import { useNotifications } from 'hooks'
import { createProviderApi } from '../services/apiService.js'

export const useProviders = () => {
  const {
    data,
    error,
    mutate
  } = useSWR(`${API_PROVIDERS}?type=standard`)
  const {
    showError,
    showSuccess
  } = useNotifications()

  useEffect(() => {
    if (error) {
      showError(error.message)
    }
  }, [error, data])

  const createProvider = (provider, callback) => {
    createProviderApi(provider).then(() => {
      showSuccess('El proveedor se ha creado correctamente')
      callback()
      return mutate()
    }).catch((error) => {
      showError(error.message)
    })
  }

  return {
    providers: data,
    createProvider
  }
}
