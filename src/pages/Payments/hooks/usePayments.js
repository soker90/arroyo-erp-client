import { useEffect } from 'react'
import useSWR from 'swr'
import { API_PAYMENTS } from 'constants/paths'
import { useNotifications } from 'hooks'
import {
  confirmPaymentApi,
  mergePaymentsApi,
  dividePaymentsApi
} from 'services/apiService'

export const usePayments = (changeSelected) => {
  const {
    data,
    error,
    mutate
  } = useSWR(API_PAYMENTS)
  const {
    showError,
    showSuccess
  } = useNotifications()

  useEffect(() => {
    if (error) {
      showError(error.message)
    }
  }, [error, data])

  const confirmPayment = (id, data, callback) => {
    confirmPaymentApi(id, data)
      .then(({ data }) => {
        showSuccess('Pago aplicado')
        callback()
        return mutate(data)
      })
      .catch((error) => {
        showError(error.message)
      })
  }

  const mergePayments = (payments) => {
    console.log(payments)
    mergePaymentsApi({ payments })
      .then(({ data }) => {
        showSuccess('¡Fusionado!')
        changeSelected([])
        return mutate(data)
      })
      .catch((error) => {
        showError(error.message)
      })
  }

  const dividePayment = (id) => {
    dividePaymentsApi(id)
      .then(({ data }) => {
        showSuccess('¡Dividido!')
        changeSelected([])
        return mutate(data)
      })
      .catch((error) => {
        showError(error.message)
      })
  }

  return {
    payments: data || [],
    isLoading: !data,
    confirmPayment,
    mergePayments,
    dividePayment
  }
}
