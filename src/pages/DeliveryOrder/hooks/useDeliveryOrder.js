import { useEffect } from 'react'
import useSWR from 'swr'

import { API_DELIVERY_ORDERS } from 'constants/paths'
import { useNotifications } from 'hooks'
import {
  deleteDeliveryOrderApi,
  deleteProductDeliveryOrder,
  updateDataDeliveryOrder,
  updateProductOfDeliveryOrder,
  addProductToDeliveryOrder
} from 'services/apiService'
import { format } from 'utils'

export const useDeliveryOrder = (id) => {
  const {
    data,
    error,
    mutate
  } = useSWR(() => id ? `${API_DELIVERY_ORDERS}/${id}` : null)

  const {
    showError,
    showSuccess
  } = useNotifications()

  useEffect(() => {
    if (error) {
      showError(error.message)
    }
  }, [error, data])

  const updateData = ({
    date,
    note,
    totals
  }, callback) => {
    const newData = {
      ...(date && { date: format.dateToSend(date) }),
      ...(note !== undefined && { note }),
      ...(totals && { totals })
    }

    updateDataDeliveryOrder(id, newData)
      .then(response => {
        showSuccess('Datos del albarán actualizados')
        callback?.()
        return mutate({ ...data, ...response })
      })
      .catch((error) => {
        showError(error.message)
      })
  }

  const deleteDeliveryOrder = callback => {
    deleteDeliveryOrderApi(id).then(() => {
      showSuccess('Se ha eliminado el albarán correctamente')
      callback?.()
    }).catch((error) => {
      showError(error.message)
    })
  }

  const addProduct = (model, callback) => {
    addProductToDeliveryOrder(id, model).then(response => {
      showSuccess('Producto añadido')
      callback?.()
      return mutate(response)
    }).catch((error) => {
      showError(error.message)
    })
  }

  const updateProduct = (index, model, callback) => {
    updateProductOfDeliveryOrder({ id, index, model }).then(response => {
      showSuccess('Producto actualizado')
      callback?.()
      return mutate(response)
    }).catch((error) => {
      showError(error.message)
    })
  }

  const deleteProduct = index => {
    deleteProductDeliveryOrder(id, index)
      .then(newData => {
        showSuccess('Se ha quitado el producto correctamente')
        return mutate(newData)
      })
      .catch((error) => {
        showError(error.message)
      })
  }

  return {
    deliveryOrder: data,
    updateData,
    deleteProduct,
    updateProduct,
    deleteDeliveryOrder,
    addProduct
  }
}
