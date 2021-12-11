import { memo, useState } from 'react';
import PropTypes from 'prop-types';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { TableMaterial } from 'components';
import { format } from 'utils';
import EditNoteModal from '../../modals/EditNoteModal';
import DeleteNoteModal from '../../modals/DeleteNoteModal';
import { useStyles } from './NotesTable.styles';

const NotesTable = ({ notes }) => {
  const classes = useStyles();
  const [noteEdit, setNoteEdit] = useState(null);
  const [noteDelete, setNoteDelete] = useState(null);

  /**
   * Show Modal for edit modal
   * @param {Object} note
   * @private
   */
  const _handleEditButton = note => {
    setNoteEdit(note);
  };

  /**
   * Cierra el modal de editar nota
   */
  const _handleEditClose = () => {
    setNoteEdit(null);
  };

  /**
   * Muestra el modal de eliminar nota
   * @param {String} _id
   */
  const _handleDeleteButton = ({ _id }) => {
    setNoteDelete(_id);
  };

  /**
   * Cierra el modal de eliminar nota
   */
  const _handleDeleteClose = () => {
    setNoteDelete(null);
  };

  return (
    <>
      <TableMaterial
        className={classes.table}
        columns={[
          {
            title: 'Fecha',
            render: ({ date }) => format.date(date),
          },
          {
            title: 'Concepto',
            field: 'concept',
          },
          {
            title: 'Cantidad',
            field: 'quantity',
          },
          {
            title: 'Precio',
            field: 'price',
          },
          {
            title: 'Importe',
            field: 'amount',
          },
          {
            title: 'Observaciones',
            field: 'clarification',
          },
        ]}
        data={notes}
        actions={[
          {
            icon: DeleteIcon,
            tooltip: 'Borrar',
            onClick: _handleDeleteButton,
          },
          {
            icon: EditIcon,
            tooltip: 'Editar',
            onClick: _handleEditButton,
          },
        ]}
      />
      <EditNoteModal note={noteEdit} close={_handleEditClose} />
      <DeleteNoteModal id={noteDelete} close={_handleDeleteClose} />
    </>
  );
};

NotesTable.propTypes = {
  notes: PropTypes.array.isRequired,
};

NotesTable.displayName = 'NotesTable';
export const story = NotesTable;
export default memo(NotesTable);
