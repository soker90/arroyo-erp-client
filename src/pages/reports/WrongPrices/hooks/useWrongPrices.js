import { useEffect } from 'react'
import useSWR from 'swr'
import { API_PRODUCTS_WRONG_PRICES } from 'constants/paths'
import { useNotifications } from 'hooks'

export const useWrongPrices = () => {
  const { data, error } = useSWR(API_PRODUCTS_WRONG_PRICES)
  const { showError } = useNotifications()

  useEffect(() => {
    if (error) {
      showError(error.message)
    }
  }, [error, data])

  return { products: data || [], isLoading: !data }
}
