import { useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import PerfectScrollbar from 'react-perfect-scrollbar'

import {
  Pagination
} from 'components/ui/pagination'

import { Table, Card } from 'components'
import { cn } from 'utils'

import NoData from './components/NoData'
import HeadTable from './components/HeadTable'
import BodyTable from './components/BodyTable'
import TitleTable from './components/TitleTable'

const TableMaterial = ({
  className,
  columns,
  actions,
  data = [],
  title,
  refresh,
  count = 0,
  onRowClick,
  withCard = true,
  href,
  multiSelect,
  onSelected,
  rowClass,
  rowsPerPageOptions,
  ...rest
}) => {
  const [page, setPage] = useState(0)
  const [limit, setLimit] = useState(rowsPerPageOptions?.[0] || 10)

  const handlePageChange = (newPage) => {
    setPage(newPage)
    refresh({
      offset: newPage * limit, limit
    })
  }

  const handleLimitChange = event => {
    setLimit(event.target.value)
    refresh({
      offset: page * event.target.value, limit: event.target.value
    })
  }

  const Wrapper = useMemo(() => (withCard ? Card : 'div'), [withCard])

  return (
    <Wrapper
      className={cn('w-auto overflow-x-auto', className)}
      {...rest}
    >
      <TitleTable title={title} />
      <PerfectScrollbar>
        <Table>
          <HeadTable actions={actions} columns={columns} multiSelect={multiSelect} />
          <BodyTable
            columns={columns}
            actions={actions}
            data={data}
            href={href}
            onRowClick={onRowClick}
            multiSelect={multiSelect}
            onSelected={onSelected}
            rowClass={rowClass}
          />
        </Table>

        <NoData elements={data.length} />
      </PerfectScrollbar>

      {Boolean(count) && (<Pagination
        count={count}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={rowsPerPageOptions || [20, 30, 40]}
        className='py-2'
                          />)}

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

export const story = TableMaterial
export default TableMaterial
