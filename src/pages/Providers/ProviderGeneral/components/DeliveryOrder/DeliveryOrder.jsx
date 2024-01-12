import {
  lazy, useState
} from 'react'
import PropTypes from 'prop-types'

import { LoadingScreen, Button } from 'components'
import { useDeliveryOrders } from '../../hooks'
import NoInvoices from './components/NoInvoices'
import DeliveryOrderSelectedSum from './components/DeliveryOrderSelectedSum'

const InInvoices = lazy(() => import('./components/InInvoices'))

const DeliveryOrder = ({
  idProvider,
  selected,
  setSelected
}) => {
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
        onClick={_handleShowClick}
        className='mt-6 mb-2'
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
