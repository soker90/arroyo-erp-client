import { useEffect } from 'react'
import useSWR from 'swr'
import { useNavigate } from 'react-router'

import { API_INVOICES, API_PRODUCTS, PATH_PROVIDERS } from 'constants/paths'
import { useNotifications } from 'hooks'
import {
  deleteProductApi,
  deleteProductPriceApi, updateInvoiceData,
  updateProductApi
} from 'services/apiService'

export const useInvoice = (id) => {
  const {
    data,
    error,
    mutate
  } = useSWR(() => id ? `${API_INVOICES}/${id}` : null)
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

  /**
   * @param {String} id
   * @param {{data: Object, totals: Object}} newData
   * @param {function} callback
   * @returns {function(...[*]=)}
   */
  const updateData = (newData, callback) => {
    updateInvoiceData(id, newData)
      .then(({
        data: dataResponse,
        totals,
        payment
      }) => {
        showSuccess('La factura se ha actualizado correctamente')
        callback()
        return mutate({
          ...data,
          ...(dataResponse && { data: dataResponse }),
          ...(totals && { totals }),
          ...(payment && { payment })
        })
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

  const deletePrice = (priceId, callback) => {
    deleteProductPriceApi(id, priceId)
      .then(() => {
        showSuccess('Precio eliminado')
        callback()
        return mutate()
      })
      .catch((error) => {
        showError(error.message)
      })
  }

  return {
    invoice: data,
    updateData

  }
}
