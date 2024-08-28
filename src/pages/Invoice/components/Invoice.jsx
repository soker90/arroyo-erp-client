import { useParams } from 'react-router'
import uniqId from 'uniqid'

import { LoadingScreen, Page, Container } from 'components'
import DeliveryOrderExpand from 'components/DeliveryOrderExpand'
import Header from './Header'
import InvoiceCards from './InvoiceCards'
import { useInvoice } from '../hooks'

const Invoice = () => {
  const { idInvoice } = useParams()

  const {
    invoice,
    updateData,
    confirm,
    deleteInvoice
  } = useInvoice(idInvoice)

  if (!invoice) return <LoadingScreen />

  const {
    nameProvider,
    provider,
    deliveryOrders,
    totals,
    data,
    payment,
    id
  } = invoice

  return (
    <Page className='min-h-full py-6' title={`${nameProvider} | Factura`}>
      <Container>
        <Header
          provider={provider}
          nameProvider={nameProvider}
          nOrder={data.nOrder}
          confirm={confirm}
          deleteInvoice={deleteInvoice}
        />

        <InvoiceCards
          totals={totals} data={data} payment={payment} id={id}
          updateData={updateData}
        />

        <div className='mt-4'>
          {deliveryOrders?.map(props => (
            <DeliveryOrderExpand {...props} key={uniqId()} />
          ))}
        </div>

      </Container>
    </Page>
  )
}

export default Invoice
