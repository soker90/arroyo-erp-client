import { useEffect } from 'react'
import useSWR from 'swr'
import { API_CLIENT_INVOICES } from 'constants/paths'
import { useNotifications } from 'hooks'
import { confirmClientInvoice } from 'services/apiService'

const DEFAULT_RESPONSE = {}

export const useClientInvoice = (id) => {
  const {
    data,
    error,
    mutate
  } = useSWR(() => `${API_CLIENT_INVOICES}/${id}`)
  const {
    showError,
    showSuccess
  } = useNotifications()

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
        return mutate({ ...data, nInvoice })
      })
      .catch((error) => {
        showError(error.message)
      })
  }

  return {
    ...(id ? data : DEFAULT_RESPONSE),
    isLoading: !data,
    confirmInvoice
  }
}
