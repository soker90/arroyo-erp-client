import { useEffect } from 'react'
import useSWR from 'swr'
import { API_DASHBOARD } from 'constants/paths'
import { useNotifications } from 'hooks'
import { deleteReminderApi, createReminderApi } from 'services/apiService'

export const useDashboard = () => {
  const {
    data,
    error,
    mutate
  } = useSWR(API_DASHBOARD)
  const {
    showError,
    showSuccess
  } = useNotifications()

  useEffect(() => {
    if (error) {
      showError(error.message)
    }
  }, [error, data])

  const deleteReminder = (id) => {
    deleteReminderApi(id)
      .then(({ reminders }) => {
        showSuccess('Recordatorio borrado')
        mutate({ ...data, reminders })
      })
      .catch((error) => {
        showError(error.message)
      })
  }

  const createReminder = (message) => {
    createReminderApi(message)
      .then(({ data }) => {
        showSuccess('Recordatorio creado')
        return mutate({ ...data, reminders })
      })
      .catch((error) => {
        showError(error.message)
      })
  }

  return {
    ...(data ?? {}),
    isLoading: !data,
    createReminder,
    deleteReminder
  }
}
