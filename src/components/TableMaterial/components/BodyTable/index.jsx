import PropTypes from 'prop-types'
import {
  Box
} from '@mui/material'
import {
  Checkbox,
  TableBody, TableCell, TableRow
} from 'components'
import uniqId from 'uniqid'
import { Link } from 'react-router-dom'

import BodyActionsButtons from './components/BodyActionsButtons'

const BodyTable = ({
  data, onRowClick, columns, href, classes, actions, multiSelect, onSelected, rowClass
}) => (
  <TableBody>
    {data.map((row, index) => {
      const isSelected = multiSelect?.(row)
      return (
        <TableRow
          onMouseDown={() => onRowClick?.(row)}
          key={uniqId()}
          selected={isSelected}
          className={rowClass?.(row) || ''}
        >
          {Boolean(multiSelect) && (
            <TableCell>
              <Checkbox
                checked={isSelected}
                onCheckedChange={checked => onSelected(checked, row)}
              />
            </TableCell>
          )}
          {columns.map(({ field, render }) => (
            <TableCell key={uniqId()}>
              <Box
                {...(href && {
                  component: Link,
                  to: href(row),
                  className: classes.cell
                })}
              >
                {render?.(row) || row[field]}
              </Box>
            </TableCell>
          ))}

          {actions &&
            (
              <BodyActionsButtons
                actions={actions}
                index={index}
                row={row}
              />
            )}
        </TableRow>
      )
    })}
  </TableBody>
)

BodyTable.propTypes = {
  data: PropTypes.array.isRequired,
  onRowClick: PropTypes.func,
  columns: PropTypes.array.isRequired,
  href: PropTypes.func,
  classes: PropTypes.object,
  actions: PropTypes.array,
  multiSelect: PropTypes.func,
  onSelected: PropTypes.func,
  rowClass: PropTypes.func
}

BodyTable.displayName = 'BodyTable'
export const story = BodyTable
export default BodyTable
