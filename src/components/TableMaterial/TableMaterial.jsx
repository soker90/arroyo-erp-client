/* eslint-disable max-len */
import { useMemo, useState } from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import PerfectScrollbar from 'react-perfect-scrollbar'
import {
  Box,
  Card,
  Table,
  TablePagination
} from '@mui/material'

import NoData from './components/NoData'
import HeadTable from './components/HeadTable'
import BodyTable from './components/BodyTable'
import TitleTable from './components/TitleTable'
import { labelOfRows } from './utils'
import { useStyles } from './TableMaterial.styles'

const TableMaterial = ({
  className, columns, actions, data, title, refresh, count, onRowClick, withCard, href, multiSelect,
  onSelected, rowClass, rowsPerPageOptions, ...rest
}) => {
  const classes = useStyles()
  const [page, setPage] = useState(0)
  const [limit, setLimit] = useState(rowsPerPageOptions?.[0] || 10)

  const handlePageChange = (event, newPage) => {
    setPage(newPage)
    refresh({
      offset: newPage * limit,
      limit
    })
  }

  const handleLimitChange = event => {
    setLimit(event.target.value)
    refresh({
      offset: page * event.target.value,
      limit: event.target.value
    })
  }

  const Wrapper = useMemo(() => (withCard ? Card : 'div'), [withCard])

  return (
    <Wrapper
      className={clsx(classes.root, className)}
      {...rest}
    >
      <TitleTable title={title} />
      <PerfectScrollbar>
        <Box>
          <Table>
            <HeadTable actions={actions} columns={columns} multiSelect={multiSelect} />
            <BodyTable
              columns={columns}
              actions={actions}
              classes={classes}
              data={data}
              href={href}
              onRowClick={onRowClick}
              multiSelect={multiSelect}
              onSelected={onSelected}
              rowClass={rowClass}
            />
          </Table>

          <NoData elements={data.length} />
        </Box>
      </PerfectScrollbar>
      {Boolean(count) &&
      (
        <TablePagination
          component='div'
          count={count}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleLimitChange}
          page={page}
          rowsPerPage={limit}
          rowsPerPageOptions={rowsPerPageOptions || [10, 20, 30]}
          labelRowsPerPage='filas'
          labelDisplayedRows={labelOfRows}
        />
      )}
    </Wrapper>
  )
}

TableMaterial.propTypes = {
  className: PropTypes.string,
  columns: PropTypes.array.isRequired,
  actions: PropTypes.array,
  data: PropTypes.array,
  title: PropTypes.string,
  refresh: PropTypes.func,
  count: PropTypes.number,
  onRowClick: PropTypes.func,
  withCard: PropTypes.bool,
  href: PropTypes.func,
  multiSelect: PropTypes.func,
  onSelected: PropTypes.func,
  rowClass: PropTypes.func,
  rowsPerPageOptions: PropTypes.array
}

TableMaterial.defaultProps = {
  data: [],
  count: 0,
  withCard: true
}

export const story = TableMaterial
export default TableMaterial
