import { useEffect } from 'react'
import useSWR from 'swr'
import { API_PRICES_CHANGES } from 'constants/paths'
import { useNotifications } from 'hooks'
import {
  changeReadPriceApi,
  deletePriceChangesApi,
  deleteManyChangesPriceApi
} from 'services/apiService'

export const usePriceChanges = () => {
  const {
    data,
    error,
    mutate
  } = useSWR(API_PRICES_CHANGES)
  const {
    showError
  } = useNotifications()

  useEffect(() => {
    if (error) {
      showError(error.message)
    }
  }, [error, data])

  const changeReadPrice = (id, read) => {
    changeReadPriceApi(id, read)
      .then(({ data }) => mutate(data))
      .catch((error) => {
        showError(error.message)
      })
  }

  const deleteManyChangesPrice = (ids) => {
    deleteManyChangesPriceApi(ids)
      .then(({ data }) => {
        return mutate(data)
      })
      .catch((error) => {
        showError(error.message)
      })
  }

  const deletePriceChanges = (id) => {
    deletePriceChangesApi(id)
      .then(({ data }) => {
        return mutate(data)
      })
      .catch((error) => {
        showError(error.message)
      })
  }

  return {
    priceChanges: data?.priceChanges || [],
    count: data?.count || 0,
    isLoading: !data,
    changeReadPrice,
    deleteManyChangesPrice,
    deletePriceChanges
  }
}
