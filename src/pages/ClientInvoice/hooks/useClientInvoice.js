import { useEffect, useState } from 'react'
import useSWR from 'swr'
import { API_CLIENT_INVOICES } from 'constants/paths'
import { useNotifications } from 'hooks'
import {
  confirmClientInvoice,
  updateDataClientInvoiceApi,
  deleteDOClientInvoice,
  createDOClientInvoice,
  updateDOClientInvoice,
  deleteClientInvoiceApi,
  deleteProductClientInvoice,
  createProductClientInvoice,
  updateProductClientInvoice
} from 'services/apiService'

export const useClientInvoice = (id) => {
  const [cachedData, setCachedData] = useState({})
  const {
    data,
    error,
    mutate
  } = useSWR(`${API_CLIENT_INVOICES}/${id}`)
  const {
    showError,
    showSuccess
  } = useNotifications()

  useEffect(() => {
    if (data) {
      setCachedData(data)
    }
  }, [data])

  useEffect(() => {
    if (error) {
      showError(error.message)
    }
  }, [error, data])

  const confirmInvoice = (data, callback) => {
    confirmClientInvoice(id)
      .then(({ nInvoice }) => {
        showSuccess('Factura confirmada')
        callback()
        return mutate({
          ...data,
          nInvoice
        })
      })
      .catch((error) => {
        showError(error.message)
      })
  }

  const updateDataClientInvoice = (data, callback) => {
    updateDataClientInvoiceApi(id, data)
      .then(({
        date,
        totals
      }) => {
        showSuccess('La factura se ha actualizado correctamente')
        callback?.()
        return mutate({
          ...data,
          ...(date && { date }),
          ...(totals && { totals })
        })
      })
      .catch((error) => {
        showError(error.message)
      })
  }

  const deleteClientInvoice = (callback) => {
    deleteClientInvoiceApi(id)
      .then(() => {
        showSuccess('La factura se ha borrado correctamente')
        callback()
      })
      .catch((error) => {
        showError(error.message)
      })
  }

  const deleteDeliveryOrder = (deliveryOrderId) => {
    deleteDOClientInvoice(id, deliveryOrderId)
      .then(() => {
        showSuccess('Albarán eliminado')
        return mutate({
          ...data,
          deliveryOrders: data.deliveryOrders.filter(deliveryOrder => deliveryOrder._id !== deliveryOrderId)
        })
      })
      .catch((error) => {
        showError(error.message)
      })
  }

  const createDeliveryOrder = () => {
    createDOClientInvoice(id)
      .then(({ data }) => {
        showSuccess('Albarán añadido correctamente')
        return mutate(data)
      })
      .catch((error) => {
        showError(error.message)
      })
  }

  const updateDeliveryOrder = ({
    deliveryOrderId,
    date
  }) => {
    updateDOClientInvoice({
      id,
      deliveryOrderId,
      date
    })
      .then(() => {
        showSuccess('Fecha del albarán actualizada')
      })
      .catch((error) => {
        showError(error.message)
      })
  }

  const deleteProduct = ({
    deliveryOrder,
    product
  }) => {
    deleteProductClientInvoice({
      invoice: id,
      deliveryOrder,
      product
    })
      .then(({ data }) => {
        showSuccess('Producto borradao')
        return mutate(data)
      })
      .catch((error) => {
        showError(error.message)
      })
  }

  const createProduct = ({
    deliveryOrder,
    data
  }, callback) => {
    createProductClientInvoice({
      invoice: id,
      deliveryOrder,
      data
    })
      .then(({ data: newData }) => {
        showSuccess('Producto añadido correctamente')
        callback()
        return mutate(newData)
      })
      .catch((error) => {
        showError(error.message)
      })
  }

  const updateProduct = ({
    deliveryOrder,
    data,
    product
  }, callback) => {
    updateProductClientInvoice({
      invoice: id,
      deliveryOrder,
      data,
      product
    })
      .then(({ data }) => {
        showSuccess('Producto actualizado')
        callback()
        return mutate(data)
      })
      .catch((error) => {
        showError(error.message)
      })
  }

  return {
    invoice: cachedData,
    isLoading: !data,
    confirmInvoice,
    updateDataClientInvoice,
    deleteDeliveryOrder,
    createDeliveryOrder,
    updateDeliveryOrder,
    deleteClientInvoice,
    deleteProduct,
    createProduct,
    updateProduct
  }
}
