import { useEffect, useMemo } from 'react'
import useSWR from 'swr'
import { API_PRODUCTS } from 'constants/paths'
import { useNotifications } from 'hooks'

export const useProducts = (provider, providerRequired) => {
  const {
    data,
    isLoading,
    error
  } = useSWR(() => {
    if (!provider && providerRequired) return null
    return `${API_PRODUCTS}${provider ? `?provider=${provider}` : ''}`
  })
  const {
    showError
  } = useNotifications()
  const productsList = useMemo(() => data?.map(p => p.name), [data])

  useEffect(() => {
    if (error) {
      showError(error.message)
    }
  }, [error, data])

  return {
    products: data || [],
    isLoading,
    productsList
  }
}
