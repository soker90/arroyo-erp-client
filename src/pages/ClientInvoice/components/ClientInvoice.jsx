import { useCallback, useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router'

import { Page, BannerPaid, Container } from 'components'
import Header from './Header'
import { useStyles } from './ClientInvoice.styles'
import ClientInvoiceCards from './ClientInvoiceCards'
import DeliveryOrderInvoice from './DeliveryOrderInvoice'
import { useClientInvoice } from '../hooks'
import ProductOrderModal from '../modals/ProductOrderModal/index.js'

const ClientInvoice = () => {
  const { idInvoice } = useParams()
  const classes = useStyles()
  const lastDORef = useRef(null)
  const isDOCreated = useRef(false)
  const {
    invoice,
    confirmInvoice,
    updateDataClientInvoice,
    deleteDeliveryOrder,
    createDeliveryOrder,
    updateDeliveryOrder,
    deleteClientInvoice,
    deleteProduct,
    createProduct,
    updateProduct
  } = useClientInvoice(idInvoice)

  const {
    _id,
    nameClient,
    date,
    deliveryOrders,
    iva,
    taxBase,
    total,
    nInvoice,
    paid,
    paymentType,
    paymentDate
  } = invoice ?? {}

  useEffect(() => {
    if (isDOCreated?.current && invoice?.deliveryOrders?.length) {
      lastDORef?.current?.scrollIntoView?.()
      isDOCreated.current = false
    }
  }, [invoice?.deliveryOrders?.length])

  const [showProduct, setShowProduct] = useState({ product: false })

  const _closeModal = useCallback(() => {
    setShowProduct({ product: false })
  }, [setShowProduct])

  const setSelectedProduct = useCallback((doAndProduct) => {
    setShowProduct(doAndProduct)
  }, [])

  // eslint-disable-next-line no-unsafe-optional-chaining
  const _isLastDO = index => invoice?.deliveryOrders?.length - 1 === index

  const createDOAndRedirect = id => {
    isDOCreated.current = true
    createDeliveryOrder(id)
  }

  return (
    <Page className={classes.root} title={`${nameClient} | Factura`}>
      <Container>
        <Header
          client={invoice?.client}
          nameClient={invoice?.nameClient}
          createDeliveryOrder={createDOAndRedirect}
          id={idInvoice}
          nInvoice={nInvoice}
          confirmInvoice={confirmInvoice}
          deleteClientInvoice={deleteClientInvoice}
        />

        {!!nInvoice && (
          <BannerPaid
            paid={paid}
            paymentType={paymentType}
            paymentDate={paymentDate}
            className='mb-2'
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

        {deliveryOrders?.map((deliveryOrder, index) => (
          <DeliveryOrderInvoice
            key={deliveryOrder._id}
            deliveryOrder={deliveryOrder}
            isEditable={!nInvoice}
            updateDOClientInvoice={updateDeliveryOrder}
            deleteDOClientInvoice={deleteDeliveryOrder}
            id={_id}
            refHeader={_isLastDO(index) ? lastDORef : null}
            deleteProduct={deleteProduct}
            setSelectedProduct={setSelectedProduct}
          />
        ))}

      </Container>
      <ProductOrderModal
        invoice={invoice?._id}
        deliveryOrder={showProduct?.deliveryOrder}
        show={showProduct?.product}
        close={_closeModal}
        createProduct={createProduct}
        updateProduct={updateProduct}
      />
    </Page>
  )
}

export default ClientInvoice
