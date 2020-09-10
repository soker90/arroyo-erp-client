import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import EditIcon from '@material-ui/icons/Edit';

import { TableMaterial } from 'components';
import { format } from 'utils';
import EditNoteModal from '../../modals/EditNoteModal';
import { useStyles } from './NotesTable.styles';

const NotesTable = ({ notes }) => {
  const classes = useStyles();
  const [noteEdit, setNoteEdit] = useState(null);
  // const [showDeleteModal, setShowDeleteModal] = useState(false);

  /**
   * Show Modal for edit modal
   * @param {Object} note
   * @private
   */
  const _handleEditButton = note => {
    setNoteEdit(note);
  };

  const _handleClose = () => {
    setNoteEdit(null);
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
        EuroIcon
        data={notes}
        actions={[
          {
            icon: EditIcon,
            tooltip: 'Editar',
            onClick: _handleEditButton,
          },
        ]}
      />
      <EditNoteModal note={noteEdit} close={_handleClose} />
      {/* <ConfirmPaymentModal payment={payment} setShow={setPayment}/> */}
    </>
  );
};

NotesTable.propTypes = {
  notes: PropTypes.array.isRequired,
};

NotesTable.displayName = 'NotesTable';
export const story = NotesTable;
export default memo(NotesTable);
