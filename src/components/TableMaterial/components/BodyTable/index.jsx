import { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import uniqId from 'uniqid'

import {
  Checkbox,
  TableBody, TableCell, TableRow
} from 'components'
import BodyActionsButtons from './components/BodyActionsButtons'

const BodyTable = ({
  data,
  onRowClick,
  columns,
  href,
  actions,
  multiSelect,
  onSelected,
  rowClass
}) => {
  const CellComponent = href ? Link : Fragment

  return (
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
            {columns.map(({
              field,
              render
            }) => (
              <TableCell key={uniqId()}>
                <CellComponent
                  {...(href && {
                    component: Link,
                    to: href(row),
                    className: 'no-underline text-inherit'
                  })}
                >
                  {render?.(row) || row[field]}
                </CellComponent>
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
}

BodyTable.propTypes = {
  data: PropTypes.array.isRequired,
  onRowClick: PropTypes.func,
  columns: PropTypes.array.isRequired,
  href: PropTypes.func,
  actions: PropTypes.array,
  multiSelect: PropTypes.func,
  onSelected: PropTypes.func,
  rowClass: PropTypes.func
}

export default BodyTable
