import { useNavigate } from 'react-router'

import { PATH_INVOICES } from 'constants/paths'
import { createInvoiceApi } from 'services/apiService'
import { useNotifications } from './useNotifications'

export const useCreateInvoice = () => {
  const navigate = useNavigate()

  const {
    showError,
    showSuccess
  } = useNotifications()

  const createInvoice = (deliveryOrders) => {
    createInvoiceApi({ deliveryOrders })
      .then(({ id }) => {
        showSuccess('Factura creada')

        navigate(`${PATH_INVOICES}/${id}`)
      })
      .catch((error) => {
        showError(error.message)
      })
  }

  return {
    createInvoice
  }
}
