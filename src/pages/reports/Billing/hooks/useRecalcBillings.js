import { useState } from 'react'
import { mutate } from 'swr'
import { API_BILLINGS } from 'constants/paths'
import { useNotifications } from 'hooks'
import { recalcProviderBillingsApi } from 'services/apiService'

export const useRecalcBillings = (year) => {
  const [isRecalculating, setIsRecalculating] = useState(false)
  const { showError, showSuccess } = useNotifications()

  const recalcBillings = async () => {
    setIsRecalculating(true)

    try {
      const result = await recalcProviderBillingsApi(year)

      if (result.updated === 0) {
        showSuccess('No se han encontrado errores de cálculo')
      } else {
        showSuccess(`Se han recalculado ${result.updated} billings correctamente`)
      }

      // Refrescar los datos en la UI
      await mutate(`${API_BILLINGS}?year=${year}`)
    } catch (error) {
      showError(error?.message || 'Error al recalcular la facturación')
    } finally {
      setIsRecalculating(false)
    }
  }

  return {
    recalcBillings,
    isRecalculating
  }
}
