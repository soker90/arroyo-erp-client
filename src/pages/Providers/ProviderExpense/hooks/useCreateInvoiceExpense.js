import { useNavigate } from 'react-router'

import { PATH_INVOICES } from 'constants/paths'
import { useNotifications } from 'hooks'
import { createInvoiceExpenseApi } from 'services/apiService'

export const useCreateInvoiceExpense = () => {
  const navigate = useNavigate()

  const {
    showError,
    showSuccess
  } = useNotifications()

  const createInvoiceExpense = (invoice) => {
    return createInvoiceExpenseApi(invoice)
      .then(({ _id }) => {
        showSuccess('Factura creada')

        navigate(`${PATH_INVOICES}/${_id}`)
      })
      .catch((error) => {
        showError(error.message)
      })
  }

  return {
    createInvoiceExpense
  }
}
