import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router'
import { Container } from '@mui/material'

import { LoadingScreen, Page } from 'components'
import Header from './Header'
import { useStyles } from './ClientInvoice.styles'
import ClientInvoiceCards from './ClientInvoiceCards'
import DeliveryOrderInvoice from './DeliveryOrderInvoice'
import BannerPaid from '../../../components/BannerPaid'
import { useClientInvoice } from '../hooks'

const ClientInvoice = ({
  resetClientInvoiceState,
  updateDataClientInvoice,
  createDeliveryOrder,
  updateDOClientInvoice,
  deleteDOClientInvoice,
  getProducts
}) => {
  const { idInvoice } = useParams()
  const classes = useStyles()
  const lastDORef = useRef(null)
  const isDOCreated = useRef(false)
  const {
    _id,
    nameClient,
    client,
    date,
    deliveryOrders,
    iva,
    taxBase,
    total,
    nInvoice,
    paid,
    paymentType,
    paymentDate,
    confirmInvoice
  } = useClientInvoice(idInvoice)

  useEffect(() => {
    getProducts()
  }, [])

  useEffect(() => () => resetClientInvoiceState(), [])

  useEffect(() => {
    if (isDOCreated?.current) {
      lastDORef?.current?.scrollIntoView?.()
      isDOCreated.current = false
    }
  }, [deliveryOrders?.length])

  if (!_id) return <LoadingScreen />

  // eslint-disable-next-line no-unsafe-optional-chaining
  const _isLastDO = index => deliveryOrders?.length - 1 === index

  const createDOAndRedirect = id => {
    isDOCreated.current = true
    createDeliveryOrder(id)
  }

  return (
    <Page className={classes.root} title={`${nameClient} | Factura`}>
      <Container maxWidth={false}>
        <Header
          client={client}
          nameClient={nameClient}
          createDeliveryOrder={createDOAndRedirect}
          id={idInvoice}
          nInvoice={nInvoice}
          confirmInvoice={confirmInvoice}
        />

        {!!nInvoice && (
          <BannerPaid
            paid={paid}
            paymentType={paymentType}
            paymentDate={paymentDate}
            className={classes.banner}
          />
        )}

        <ClientInvoiceCards
          total={total}
          taxBase={taxBase}
          iva={iva}
          date={date}
          id={idInvoice}
          updateDataClientInvoice={updateDataClientInvoice}
          nInvoice={nInvoice}
        />

        {deliveryOrders.map((deliveryOrder, index) => (
          <DeliveryOrderInvoice
            key={deliveryOrder._id}
            deliveryOrder={deliveryOrder}
            isEditable={!nInvoice}
            updateDOClientInvoice={updateDOClientInvoice}
            deleteDOClientInvoice={deleteDOClientInvoice}
            id={_id}
            refHeader={_isLastDO(index) ? lastDORef : null}
          />
        ))}

      </Container>
    </Page>
  )
}

ClientInvoice.propTypes = {
  resetClientInvoiceState: PropTypes.func.isRequired,
  updateDataClientInvoice: PropTypes.func.isRequired,
  createDeliveryOrder: PropTypes.func.isRequired,
  updateDOClientInvoice: PropTypes.func.isRequired,
  deleteDOClientInvoice: PropTypes.func.isRequired,
  getProducts: PropTypes.func.isRequired
}

export default ClientInvoice
