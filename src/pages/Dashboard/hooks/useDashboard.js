import { useEffect } from 'react'
import useSWR from 'swr'
import { API_DASHBOARD } from 'constants/paths'
import { useNotifications } from 'hooks'
import { deleteReminderApi, createReminderApi } from 'services/apiService'

const DEFAULT_RESPONSE = {
  reminders: [],
  cash: {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    total: 0
  }
}
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

  const createReminder = (message, callback) => {
    createReminderApi(message)
      .then(({ reminders }) => {
        showSuccess('Recordatorio creado')
        callback()
        return mutate({ ...data, reminders })
      })
      .catch((error) => {
        showError(error.message)
      })
  }

  return {
    ...(data ?? DEFAULT_RESPONSE),
    isLoading: !data,
    createReminder,
    deleteReminder
  }
}
