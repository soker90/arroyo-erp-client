import {
  useCallback, useEffect, useMemo, useState
} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import { Eye } from 'lucide-react'

import { InputForm, TableMaterial, TextEuro, Card, Grid } from 'components'
import { BASE_PATH } from 'constants/common'
import { useDebounce } from 'hooks'
import { format } from 'utils'

const InInvoices = ({
  deliveryOrders: {
    data,
    count,
    hasCanal
  },
  updateFilters
}) => {
  const [canal, setCanal] = useState('')
  const debounce = useDebounce()

  useEffect(() => {
    debounce(() => {
      updateFilters({
        canal
      })
    }, 500)
  }, [canal])

  const _refresh = useCallback(({
    offset,
    limit
  }) => {
    updateFilters({
      offset,
      limit
    })
  }, [])

  const _handleSearch = useCallback(({
    target: {
      value
    }
  }) => {
    setCanal(value)
  }, [setCanal])

  const _renderSearch = () => (
    <Grid container spacing={2} className='mt-4 pr-6 -mb-20'>
      <Grid item md={10} />
      <InputForm label='Canal' size={2} value={canal} onChange={_handleSearch} />
    </Grid>
  )

  const columns = useMemo(() => [
    {
      title: 'Fecha',
      render: ({ date }) => format.date(date)
    },
    {
      title: 'Total',
      render: ({ total }) => <TextEuro num={total} />
    },
    {
      title: 'Nota',
      field: 'note'
    }
  ], [])

  const actions = useMemo(() => [
    {
      icon: Eye,
      tooltip: 'Ver',
      component: Link,
      to: ({ _id }) => `${BASE_PATH}/albaranes/${_id}`
    }
  ], [])

  return (
    <Card>
      {hasCanal && _renderSearch()}
      <TableMaterial
        className='mt-4'
        columns={columns}
        data={data}
        count={count}
        title='Albaranes en factura'
        actions={actions}
        refresh={_refresh}
        withCard={false}
      />
    </Card>
  )
}

InInvoices.propTypes = {
  deliveryOrders: PropTypes.shape({
    data: PropTypes.array,
    count: PropTypes.number,
    hasCanal: PropTypes.bool
  }).isRequired
}

export default InInvoices
