import { useEffect } from 'react'
import useSWR from 'swr'

import { API_DELIVERY_ORDERS } from 'constants/paths'
import { useNotifications } from 'hooks'
import {
  deleteProductDeliveryOrder, updateDataDeliveryOrder
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
    deleteProduct
  }
}
