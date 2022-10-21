import {
  useCallback, useEffect, useMemo, useState
} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import VisibilityIcon from '@mui/icons-material/Visibility'

import { InputForm, TableMaterial, TextEuro } from 'components'
import { format } from 'utils'
import { BASE_PATH } from 'constants/common'
import { Card, Grid } from '@mui/material'
import { useDebounce } from 'hooks'
import { useStyles } from './InInvoices.styles'

const InInvoices = ({
  deliveryOrders: {
    data,
    count,
    hasCanal
  },
  idProvider,
  getDeliveryOrders
}) => {
  const [canal, setCanal] = useState('')
  const classes = useStyles()
  const debounce = useDebounce()

  useEffect(() => {
    debounce(() => {
      getDeliveryOrders({
        provider: idProvider,
        canal
      })
    }, 500)
  }, [canal])

  const _refresh = useCallback(({
    offset,
    limit
  }) => {
    getDeliveryOrders({
      provider: idProvider,
      offset,
      limit
    })
  }, [idProvider])

  const _handleSearch = useCallback(({
    target: {
      value
    }
  }) => {
    setCanal(value)
  }, [setCanal])

  const _renderSearch = () => (
    <Grid container spacing={2} className={classes.search}>
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
      // eslint-disable-next-line react/prop-types
      render: ({ total }) => <TextEuro num={total} />
    },
    {
      title: 'Nota',
      field: 'note'
    }
  ], [])

  const actions = useMemo(() => [
    {
      icon: VisibilityIcon,
      tooltip: 'Ver',
      component: Link,
      to: ({ _id }) => `${BASE_PATH}/albaranes/${_id}`
    }
  ], [])

  return (
    <Card>
      {hasCanal && _renderSearch()}
      <TableMaterial
        className={classes.table}
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
  }).isRequired,
  getDeliveryOrders: PropTypes.func.isRequired,
  idProvider: PropTypes.string.isRequired
}

InInvoices.displayName = 'InInvoices'

export default InInvoices
