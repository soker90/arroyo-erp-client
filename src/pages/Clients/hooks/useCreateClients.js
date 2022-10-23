import { useNotifications } from 'hooks'
import { createClient } from 'services/apiService'

export const useClients = () => {
  const { showError } = useNotifications()

  const addClient = (client) => {
    createClient(client).then((response) => {

    })
  }

  return { clients: data || [], isLoading: !data }
}