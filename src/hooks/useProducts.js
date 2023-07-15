import { useEffect, useMemo } from 'react'
import useSWR from 'swr'
import { API_PRODUCTS, PATH_INVOICES } from 'constants/paths'
import { useNotifications } from 'hooks'
import { createProductApi } from '../services/apiService.js'

export const useProducts = (provider, providerRequired) => {
  const {
    data,
    isLoading,
    error,
    mutate
  } = useSWR(() => {
    if (!provider && providerRequired) return null
    return `${API_PRODUCTS}${provider ? `?provider=${provider}` : ''}`
  })
  const {
    showError,
    showSuccess
  } = useNotifications()
  const productsList = useMemo(() => data?.map(p => p.name), [data])

  useEffect(() => {
    if (error) {
      showError(error.message)
    }
  }, [error, data])

  const createProduct = (product, callback) => {
    createProductApi(product).then(({ name }) => {
      showSuccess(`El producto ${name} se ha creado correctamente`)
      callback?.()
      mutate()
    })
      .catch((error) => {
        console.log(error)
        showError(error.message)
      })
  }

  return {
    products: data || [],
    isLoading,
    productsList,
    createProduct
  }
}
