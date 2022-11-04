import { useEffect } from 'react'
import useSWR from 'swr'
import { API_CLIENTS } from 'constants/paths'
import { useNotifications } from 'hooks'
import { createClientInvoice, editClientApi } from 'services/apiService'

const DEFAULT_RESPONSE = {}

export const useClient = (id) => {
  const {
    data,
    error,
    mutate
  } = useSWR(() => `${API_CLIENTS}/${id}`)
  const {
    showError,
    showSuccess
  } = useNotifications()

  useEffect(() => {
    if (error) {
      showError(error.message)
    }
  }, [error, data])

  const createInvoice = (clientId, callback) => {
    createClientInvoice(clientId)
      .then((data) => {
        callback(data.id)
      })
      .catch((error) => {
        showError(error.message)
      })
  }

  const editClient = (data, callback) => {
    editClientApi(id, data)
      .then((response) => {
        showSuccess(`${response.name} ha sido actualizado`)
        callback()
        return mutate(response)
      })
      .catch((error) => {
        showError(error.message)
      })
  }

  return {
    client: id ? data : DEFAULT_RESPONSE,
    isLoading: !data,
    createInvoice,
    editClient
  }
}
