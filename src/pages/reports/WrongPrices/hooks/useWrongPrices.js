import { useEffect } from 'react'
import useSWR from 'swr'
import { API_PRODUCTS_WRONG_PRICES } from 'constants/paths'
import { useNotifications } from 'hooks'
import { fixProductPricesApi } from 'services/apiService'

export const useWrongPrices = () => {
  const { data, error, mutate } = useSWR(API_PRODUCTS_WRONG_PRICES)
  const { showError, showSuccess } = useNotifications()

  useEffect(() => {
    if (error) {
      showError(error.message)
    }
  }, [error, data])

  const fixPrices = () => {
    fixProductPricesApi().then(() => {
      showSuccess('Precios corregidos correctamente')
      return mutate()
    })
      .catch((error) => {
        showError(error.message)
      })
  }

  return { products: data || [], isLoading: !data, fixPrices }
}
