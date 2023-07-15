import { useEffect, useReducer } from 'react'
import useSWR from 'swr'
import { API_INVOICES } from 'constants/paths'
import { useDebounce, useNotifications } from 'hooks'
import { format, objectToParams } from 'utils'
import axios from 'axios'
import { INITIAL_STATE } from '../constans'

export const useInvoices = (providerId) => {
  const [filters, setFilters] = useReducer(
    (oldstate, newState) => ({ ...oldstate, ...newState }),
    initialFilters
  )
  const { dateInvoice, expenses, ...restFilters } = filters

  const fetcher = (url) => axios.get(`${url}?year=${year}${objectToParams({
    ...restFilters,
    ...(dateInvoice && { dateInvoice: format.dateToSend(dateInvoice) }),
    ...(expenses && { expenses })
  }, false)}`).then(res => res.data)

  const { data, error, mutate } = useSWR(API_INVOICES, fetcher)
  const { showError } = useNotifications()
  const debounce = useDebounce()

  useEffect(() => {
    if (error) {
      showError(error.message)
    }
  }, [error, data])

  useEffect(() => {
    if (year) debounce(() => mutate(), 200)
  }, [filters, year])

  return { invoices: data?.invoices || [], count: data?.count || 0, isLoading: !data, filters, setFilters }
}
