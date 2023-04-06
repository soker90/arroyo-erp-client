import PropTypes from 'prop-types'
import { useParams } from 'react-router'
import { Container } from '@mui/material'
import uniqId from 'uniqid'

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
    updateData
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
        />

        <InvoiceCards
          totals={totals} data={data} payment={payment} id={id}
          updateData={updateData}
        />

        <div className={classes.orders}>
          {deliveryOrders?.map(props => (
            <DeliveryOrderExpand {...props} key={uniqId()} />
          ))}
        </div>

      </Container>
    </Page>
  )
}

Invoice.propTypes = {
  getInvoice: PropTypes.func.isRequired,
  deliveryOrders: PropTypes.array,
  id: PropTypes.string,
  nameProvider: PropTypes.string,
  provider: PropTypes.string,
  totals: PropTypes.object,
  data: PropTypes.object,
  payment: PropTypes.object,
  resetInvoiceState: PropTypes.func.isRequired
}

Invoice.displayName = 'Invoice'
export const story = Invoice
export default Invoice
