import { useEffect } from 'react'
import useSWR from 'swr'
import { API_PRODUCTS } from 'constants/paths'
import { useNotifications } from 'hooks'
import {
  createProductClient, deleteProductApi, updateProductApi
} from 'services/apiService'

export const useProducts = () => {
  const {
    data,
    error,
    mutate
  } = useSWR(API_PRODUCTS)
  const {
    showError,
    showSuccess
  } = useNotifications()

  useEffect(() => {
    if (error) {
      showError(error.message)
    }
  }, [error, data])

  const createProduct = (data, callback) => {
    createProductClient(data)
      .then(({ data }) => {
        callback()
        return mutate(data)
      })
      .catch((error) => {
        showError(error.message)
      })
  }

  const editProduct = (id, data, callback) => {
    updateProductApi(id, data)
      .then(({ name }) => {
        showSuccess(`${name} actualizado`)
        callback()
        return mutate()
      })
      .catch((error) => {
        showError(error.message)
      })
  }

  const deleteProduct = (id) => {
    deleteProductApi(id)
      .then(({ data }) => {
        showSuccess('Producto eliminado')
        return mutate(data)
      })
      .catch((error) => {
        showError(error.message)
      })
  }

  return {
    products: data || [],
    isLoading: !data,
    createProduct,
    editProduct,
    deleteProduct
  }
}
