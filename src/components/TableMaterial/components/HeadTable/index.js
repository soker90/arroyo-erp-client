import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { TableCell, TableHead, TableRow } from '@material-ui/core';

const HeadTable = ({ columns, actions, multiSelect }) => (
  <TableHead styles={{ fontSize: 20 }}>
    <TableRow>
      {multiSelect && <TableCell />}
      {columns.map(({ title }, idCol) => (
        <TableCell key={idCol}>
          {title}
        </TableCell>
      ))}
      {actions
      && (
        <TableCell align='right'>
          Acciones
        </TableCell>
      )}
    </TableRow>
  </TableHead>
);

HeadTable.propTypes = {
  columns: PropTypes.array.isRequired,
  actions: PropTypes.array.isRequired,
  multiSelect: PropTypes.func,
};

HeadTable.displayName = 'HeadTable';
export const story = HeadTable;
export default memo(HeadTable);
