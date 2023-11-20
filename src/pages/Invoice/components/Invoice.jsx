import { useParams } from 'react-router'
import { Container } from '@mui/material'

import { LoadingScreen, Page } from 'components'
import DeliveryOrderExpand from 'components/DeliveryOrderExpand'
import Header from './Header'
import { useStyles } from './Invoice.styles'
import InvoiceCards from './InvoiceCards'
import { useInvoice } from '../hooks'

const Invoice = () => {
  const { idInvoice } = useParams()
  const classes = useStyles()

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
    <Page className={classes.root} title={`${nameProvider} | Factura`}>
      <Container maxWidth={false}>
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

        <div className={classes.orders}>
          {deliveryOrders?.map(props => (
            <DeliveryOrderExpand {...props} key={props._id} />
          ))}
        </div>

      </Container>
    </Page>
  )
}

export default Invoice
