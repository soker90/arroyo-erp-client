import { useEffect } from 'react'
import useSWR from 'swr'
import { API_NOTES } from 'constants/paths'
import { useNotifications } from 'hooks'
import {
  createNoteApi
} from 'services/apiService'

export const useNotes = (year) => {
  const {
    data,
    error,
    mutate
  } = useSWR(`${API_NOTES}?year=${year}`)
  const {
    showError,
    showSuccess
  } = useNotifications()

  useEffect(() => {
    if (error) {
      showError(error.message)
    }
  }, [error, data])

  const createNote = (data, callback) => {
    createNoteApi(data)
      .then(({ data }) => {
        showSuccess('Nota creada')
        callback()
        return mutate(data)
      })
      .catch((error) => {
        showError(error.message)
      })
  }

  return {
    notes: data || [],
    isLoading: !data,
    createNote
  }
}
