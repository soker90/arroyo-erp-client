import {
  lazy, useState
} from 'react'
import PropTypes from 'prop-types'
import { Button } from '@mui/material'

import { LoadingScreen } from 'components'
import { useDeliveryOrders } from '../../hooks'
import NoInvoices from './components/NoInvoices'
import DeliveryOrderSelectedSum from './components/DeliveryOrderSelectedSum'
import { useStyles } from './DeliveryOrder.styles'

const InInvoices = lazy(() => import('./components/InInvoices'))

const DeliveryOrder = ({
  idProvider,
  selected,
  setSelected
}) => {
  const classes = useStyles()
  const [showInInvoices, setShowInInvoices] = useState(false)
  const {
    free,
    inInvoices,
    isLoading,
    updateFilters
  } = useDeliveryOrders({ provider: idProvider })

  const _handleShowClick = () => {
    setShowInInvoices(state => !state)
  }

  if (!idProvider || isLoading) return <LoadingScreen />

  return (
    <>
      {Boolean(selected.length) && <DeliveryOrderSelectedSum selected={selected} free={free} />}
      <NoInvoices
        deliveryOrders={free}
        selected={selected}
        setSelected={setSelected}
      />

      <Button
        color='primary'
        onClick={_handleShowClick}
        variant='outlined'
        className={classes.button}
      >
        {showInInvoices ? 'Ocultar' : 'Mostrar'}
        {' '}
        en factura
      </Button>

      {showInInvoices && (
        <InInvoices
          deliveryOrders={inInvoices}
          idProvider={idProvider}
          updateFilters={updateFilters}
        />
      )}
    </>
  )
}

DeliveryOrder.propTypes = {
  idProvider: PropTypes.string,
  setSelected: PropTypes.func.isRequired,
  selected: PropTypes.array.isRequired
}

export default DeliveryOrder
