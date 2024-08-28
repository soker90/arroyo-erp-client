import { useState } from 'react'
import PropTypes from 'prop-types'
import { PencilIcon, TrashIcon } from 'lucide-react'

import { TableMaterial } from 'components'
import { format } from 'utils'
import EditNoteModal from '../../modals/EditNoteModal'
import DeleteNoteModal from '../../modals/DeleteNoteModal'

const NotesTable = ({ notes, editNote, deleteNote }) => {
  const [noteEdit, setNoteEdit] = useState(null)
  const [noteDelete, setNoteDelete] = useState(null)

  /**
   * Show Modal for edit modal
   * @param {Object} note
   * @private
   */
  const _handleEditButton = note => {
    setNoteEdit(note)
  }

  /**
   * Cierra el modal de editar nota
   */
  const _handleEditClose = () => {
    setNoteEdit(null)
  }

  /**
   * Muestra el modal de eliminar nota
   * @param {String} _id
   */
  const _handleDeleteButton = ({ _id }) => {
    setNoteDelete(_id)
  }

  /**
   * Cierra el modal de eliminar nota
   */
  const _handleDeleteClose = () => {
    setNoteDelete(null)
  }

  return (
    <>
      <TableMaterial
        className='mt-4'
        columns={[
          {
            title: 'Fecha',
            render: ({ date }) => format.date(date)
          },
          {
            title: 'Concepto',
            field: 'concept'
          },
          {
            title: 'Cantidad',
            field: 'quantity'
          },
          {
            title: 'Precio',
            field: 'price'
          },
          {
            title: 'Importe',
            field: 'amount'
          },
          {
            title: 'Observaciones',
            field: 'clarification'
          }
        ]}
        data={notes}
        actions={[
          {
            icon: TrashIcon,
            tooltip: 'Borrar',
            onClick: _handleDeleteButton
          },
          {
            icon: PencilIcon,
            tooltip: 'Editar',
            onClick: _handleEditButton
          }
        ]}
      />
      <EditNoteModal note={noteEdit} close={_handleEditClose} editNote={editNote} />
      <DeleteNoteModal id={noteDelete} close={_handleDeleteClose} deleteNote={deleteNote} />
    </>
  )
}

NotesTable.propTypes = {
  notes: PropTypes.array.isRequired,
  editNote: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired
}
export default NotesTable
