import { useEffect } from 'react'
import useSWR from 'swr'
import { API_CLIENTS } from 'constants/paths'
import { useNotifications } from 'hooks'
import { createClientInvoice } from 'services/apiService'

const DEFAULT_RESPONSE = {
  client: {},
  invoices: [],
  count: 0
}

export const useClient = (id) => {
  const { data, error, mutate } = useSWR(() => `${API_CLIENTS}/${id}`)
  const { showError } = useNotifications()

  useEffect(() => {
    if (error) {
      showError(error.message)
    }
  }, [error, data])

  const createInvoice = (clientId, callback) => {
    createClientInvoice(clientId).then(({ data }) => {
      callback(data.id)
    })
      .catch((error) => {
        showError(error.message)
      })
  }

  const getInvoices = () => {
    /// mutate with pages

  }
  return { ...(id ? data : DEFAULT_RESPONSE), isLoading: !data, createInvoice }
}
