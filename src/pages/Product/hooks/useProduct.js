import { useEffect } from 'react'
import useSWR from 'swr'
import { useNavigate } from 'react-router'

import { API_PRODUCTS, PATH_PROVIDERS } from 'constants/paths'
import { useNotifications } from 'hooks'
import {
  deleteProductApi,
  updateProductApi
} from 'services/apiService'

export const useProduct = (id) => {
  const {
    data,
    error,
    mutate
  } = useSWR(`${API_PRODUCTS}/${id}`)
  const {
    showError,
    showSuccess
  } = useNotifications()

  const navigate = useNavigate()

  useEffect(() => {
    if (error) {
      showError(error.message)
    }
  }, [error, data])

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

  const deleteProduct = () => {
    deleteProductApi(id)
      .then(() => {
        showSuccess(`Producto ${data?.product.name} eliminado`)
        navigate(`${PATH_PROVIDERS}/${data?.product.provider}#Productos`)
      })
      .catch((error) => {
        showError(error.message)
      })
  }

  return {
    product: data?.product || {},
    prices: data?.prices || [],
    reversePrices: data?.prices.slice()
      .reverse() || [],
    isLoading: !data,
    editProduct,
    deleteProduct
  }
}
