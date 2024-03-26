import PropTypes from 'prop-types'

import { TableHead, TableHeader, TableRow } from 'components'

const HeadTable = ({ columns, actions, multiSelect }) => (
  <TableHeader>
    <TableRow>
      {multiSelect && <TableHead />}
      {columns.map(({ title }) => (
        <TableHead key={title}>
          {title}
        </TableHead>
      ))}
      {actions &&
      (
        <TableHead align='right'>
          Acciones
        </TableHead>
      )}
    </TableRow>
  </TableHeader>
)

HeadTable.propTypes = {
  columns: PropTypes.array.isRequired,
  actions: PropTypes.array,
  multiSelect: PropTypes.func
}

HeadTable.displayName = 'HeadTable'
export const story = HeadTable
export default HeadTable
