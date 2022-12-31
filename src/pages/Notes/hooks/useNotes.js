import { useEffect } from 'react'
import useSWR from 'swr'
import { API_NOTES } from 'constants/paths'
import { useNotifications } from 'hooks'
import {
  createNoteApi, deleteNoteApi, editNoteApi
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

  const editNote = (id, data, callback) => {
    editNoteApi(id, data).then(({ data }) => {
      showSuccess('Nota actualizada')
      callback()
      return mutate(data)
    })
      .catch((error) => {
        showError(error.message)
      })
  }

  const deleteNote = (id, callback) => {
    deleteNoteApi(id)
      .then(({ data }) => {
        showSuccess('Nota borrada')
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
    createNote,
    editNote,
    deleteNote
  }
}
