import { renderHook, act } from '@testing-library/react'
import { useNavigate } from 'react-router'
import { expect, describe, it, vi, beforeEach } from 'vitest'

import { useCreateDeliveryOrder } from './useCreateDeliveryOrder'
import { createDeliveryOrderApi } from 'services/apiService'
import { PATH_DELIVERY_ORDERS } from 'constants/paths'
import { useNotifications } from './useNotifications'

vi.mock('react-router')
vi.mock('services/apiService')
vi.mock('./useNotifications')

describe('useCreateDeliveryOrder', () => {
  const navigateMock = vi.fn()
  const showErrorMock = vi.fn()
  const showSuccessMock = vi.fn()
  vi.useFakeTimers()

  beforeEach(() => {
    navigateMock.mockReset()
    showErrorMock.mockReset()
    showSuccessMock.mockReset()

    useNavigate.mockReturnValue(navigateMock)
    useNotifications.mockReturnValue({
      showError: showErrorMock,
      showSuccess: showSuccessMock
    })
  })

  describe('createDeliveryOrder', () => {
    const provider = 'myProvider'

    it('should create a delivery order successfully', async () => {
      const _id = '1234567890'
      createDeliveryOrderApi.mockResolvedValueOnce({ _id })
      const { result } = renderHook(() => useCreateDeliveryOrder(provider))

      await act(() => result.current.createDeliveryOrder())

      expect(createDeliveryOrderApi).toHaveBeenCalledWith(provider)
      expect(showSuccessMock).toHaveBeenCalledWith('Albarán creado')
      expect(navigateMock).toHaveBeenCalledWith(`${PATH_DELIVERY_ORDERS}/${_id}?search=creado`)
    })

    it('should handle errors when creating a delivery order', async () => {
      const error = new Error('Error creating delivery order')
      createDeliveryOrderApi.mockRejectedValueOnce(error)
      const { result } = renderHook(() => useCreateDeliveryOrder(provider))

      await act(() => result.current.createDeliveryOrder())

      expect(createDeliveryOrderApi).toHaveBeenCalledWith(provider)
      expect(showErrorMock).toHaveBeenCalledWith('Error creating delivery order')
    })
  })
})
