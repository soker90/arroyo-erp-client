import PropTypes from 'prop-types'
import { TableCell, TableHead, TableRow } from '@mui/material'

const HeadTable = ({ columns, actions, multiSelect }) => (
  <TableHead styles={{ fontSize: 20 }}>
    <TableRow>
      {multiSelect && <TableCell />}
      {columns.map(({ title }) => (
        <TableCell key={title}>
          {title}
        </TableCell>
      ))}
      {actions &&
      (
        <TableCell align='right'>
          Acciones
        </TableCell>
      )}
    </TableRow>
  </TableHead>
)

HeadTable.propTypes = {
  columns: PropTypes.array.isRequired,
  actions: PropTypes.array,
  multiSelect: PropTypes.func
}

HeadTable.displayName = 'HeadTable'
export const story = HeadTable
export default HeadTable
