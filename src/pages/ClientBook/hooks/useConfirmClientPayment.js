import { useSWRConfig } from 'swr'
import { useNotifications } from 'hooks'
import { confirmClientPayment } from 'services/apiService'
import { API_CLIENT_INVOICES } from 'constants/paths'

export const useConfirmClientPayment = (year) => {
  const { mutate } = useSWRConfig()
  const {
    showError,
    showSuccess
  } = useNotifications()

  const confirmPayment = (id, data, callback) => {
    confirmClientPayment(id, data)
      .then(() => {
        showSuccess('Pago aplicado')
        callback()
        mutate(`${API_CLIENT_INVOICES}?year=${year}`)
      })
      .catch((error) => {
        showError(error.message)
      })
  }

  return { confirmPayment }
}
