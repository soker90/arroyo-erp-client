import { useState } from 'react'
import { mutate } from 'swr'
import { API_BILLINGS } from 'constants/paths'
import { useNotifications } from 'hooks'
import { recalcProviderBillingsApi } from 'services/apiService'

const STORAGE_KEY = 'billing_recalc_changes'

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
        showSuccess(`Se han recalculado ${result.updated} proveedores correctamente`)

        // Guardar los cambios en localStorage
        if (result.changes && result.changes.length > 0) {
          const storageData = {
            year,
            timestamp: new Date().getTime(),
            changes: result.changes,
            updated: result.updated
          }
          localStorage.setItem(`${STORAGE_KEY}_${year}`, JSON.stringify(storageData))

          // Disparar evento personalizado para actualizar la UI en la misma pestaña
          window.dispatchEvent(new CustomEvent('billingRecalcUpdate'))
        }
      }

      // Refrescar los datos en la UI
      await mutate(`${API_BILLINGS}?year=${year}`)
    } catch (error) {
      showError(error?.message || 'Error al recalcular la facturación')
    } finally {
      setIsRecalculating(false)
    }
  }

  const getStoredChanges = () => {
    const stored = localStorage.getItem(`${STORAGE_KEY}_${year}`)
    return stored ? JSON.parse(stored) : null
  }

  const clearStoredChanges = () => {
    localStorage.removeItem(`${STORAGE_KEY}_${year}`)
  }

  return {
    recalcBillings,
    isRecalculating,
    getStoredChanges,
    clearStoredChanges
  }
}
