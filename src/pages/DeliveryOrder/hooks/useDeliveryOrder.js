import { useEffect } from 'react'
import useSWR from 'swr'
import { useNavigate } from 'react-router'

import { API_DELIVERY_ORDERS } from 'constants/paths'
import { useNotifications } from 'hooks'
import {
  confirmInvoice, deleteInvoiceApi, updateDataDeliveryOrder,
  updateInvoiceData
} from 'services/apiService'
import { format } from '../../../utils/index.js'

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

  const navigate = useNavigate()

  useEffect(() => {
    if (error) {
      showError(error.message)
    }
  }, [error, data])

  const updateData = ({ date, note, totals }, callback) => {
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

  const confirm = confirmData => {
    confirmInvoice(id, confirmData)
      .then(({
        data: newData,
        payment
      }) => {
        showSuccess('Factura confirmada')
        return mutate({
          ...data,
          data: newData,
          payment
        })
      })
      .catch((error) => {
        showError(error.message)
      })
  }

  const deleteInvoice = () => {
    deleteInvoiceApi(id)
      .then(() => {
        navigate(`/app/proveedores/${data.provider}#Facturas`)
        showSuccess('Factura eliminada')
      })
      .catch((error) => {
        showError(error.message)
      })
  }

  return {
    deliveryOrder: data,
    updateData
  }
}
