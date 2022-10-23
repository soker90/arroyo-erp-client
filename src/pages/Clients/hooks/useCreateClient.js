import { useSWRConfig } from 'swr'
import { useNotifications } from 'hooks'
import { createClient } from 'services/apiService'
import { API_CLIENTS } from 'constants/paths'

export const useCreateClient = () => {
  const { mutate } = useSWRConfig()
  const {
    showError,
    showSuccess
  } = useNotifications()

  const addClient = (client, callback) => {
    createClient(client)
      .then(() => {
        showSuccess('El cliente se ha creado correctamente')
        callback()
        mutate(API_CLIENTS)
      })
      .catch((error) => {
        showError(error.message)
      })
  }

  return { addClient }
}
