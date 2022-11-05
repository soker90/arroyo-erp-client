import { useEffect } from 'react'
import useSWR from 'swr'
import { API_CLIENT_INVOICES_SHORT } from 'constants/paths'
import { useNotifications } from 'hooks'
import { objectToParams } from '../../../utils'

const DEFAULT_RESPONSE = {
  invoices: [],
  count: 0
}

export const useClientInvoices = (params) => {
  const {
    data,
    error
  } = useSWR(() => `${API_CLIENT_INVOICES_SHORT}${objectToParams(params)}`)
  const { showError } = useNotifications()

  useEffect(() => {
    if (error) {
      showError(error.message)
    }
  }, [error, data])

  return { ...(params.client ? data : DEFAULT_RESPONSE), isLoading: !data }
}
