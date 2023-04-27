import { useNavigate } from 'react-router'
import { PATH_DELIVERY_ORDERS } from 'constants/paths'
import { createDeliveryOrderApi } from 'services/apiService'
import { useNotifications } from './useNotifications'

export const useCreateDeliveryOrder = (provider) => {
  const navigate = useNavigate()

  const {
    showError,
    showSuccess
  } = useNotifications()

  const createDeliveryOrder = (callback) => {
    createDeliveryOrderApi(provider).then(({ _id }) => {
      showSuccess('Albarán creado')
      callback?.()
      navigate(`${PATH_DELIVERY_ORDERS}/${_id}?search=creado`)
    }).catch((error) => {
      showError(error.message)
    })
  }

  return {
    createDeliveryOrder
  }
}
