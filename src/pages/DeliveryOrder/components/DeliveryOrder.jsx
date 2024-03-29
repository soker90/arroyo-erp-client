import { Grid } from '@mui/material'
import { useParams } from 'react-router'

import { LoadingScreen, Page, Container } from 'components'

import DeliveryOrderProducts from './DeliveryOrderProducts'
import DeliveryOrderData from './DeliveryOrderData'
import DeliveryOrderTotals from './DeliveryOrderTotals'
import Header from './Header'
import { useStyles } from './DeliveryOrder.styles'
import { useDeliveryOrder } from '../hooks'

const DeliveryOrder = () => {
  const classes = useStyles()
  const { idDeliveryOrder } = useParams()
  const {
    deliveryOrder,
    updateData,
    deleteProduct,
    updateProduct,
    deleteDeliveryOrder,
    addProduct
  } = useDeliveryOrder(idDeliveryOrder)

  if (!deliveryOrder) return <LoadingScreen />

  const {
    provider,
    nameProvider,
    date,
    products,
    nOrder,
    totals,
    hasCanal,
    invoice,
    note
  } = deliveryOrder

  return (
    <Page className={classes.root} title={`${nameProvider} | Albarán`}>
      <Container>
        <Header
          nameProvider={nameProvider}
          provider={provider}
          readOnly={Boolean(nOrder)}
          invoice={invoice}
          deleteDeliveryOrder={deleteDeliveryOrder}
          addProduct={addProduct}
          hasCanal={deliveryOrder.hasCanal}
        />

        {
          date && (
            <DeliveryOrderProducts
              products={products}
              deleteProduct={deleteProduct}
              isEditable={!nOrder}
              hasCanal={hasCanal}
              idProvider={provider}
              updateProduct={updateProduct}
            />
          )
        }

        <Grid container spacing={3} className={classes.cards}>
          <Grid item xs={12} md={4}>
            <DeliveryOrderData
              date={date}
              readOnly={Boolean(nOrder)}
              updateData={updateData}
              note={note}
              idDeliveryOrder={idDeliveryOrder}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <DeliveryOrderTotals totals={totals} isEditable={!nOrder} updateData={updateData} />
          </Grid>
        </Grid>

      </Container>
    </Page>
  )
}

export default DeliveryOrder
