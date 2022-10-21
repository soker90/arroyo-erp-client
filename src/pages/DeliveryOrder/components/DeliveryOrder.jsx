import { useEffect } from 'react'
import { Container, Grid } from '@mui/material'
import PropTypes from 'prop-types'

import { Page } from 'components'
import { useParams } from 'react-router'
import DeliveryOrderProducts from './DeliveryOrderProducts'
import DeliveryOrderData from './DeliveryOrderData'
import DeliveryOrderTotals from './DeliveryOrderTotals'
import Header from './Header'
import { useStyles } from './DeliveryOrder.styles'

const DeliveryOrder = (
  {
    getProducts, getDeliveryOrder, provider, nameProvider,
    products, date, totals, _id, nOrder, updateDataDeliveryOrder,
    showDeleteProductModal, showEditProductModal, resetDeliveryOrder,
    note, hasCanal, invoice
  }
) => {
  const classes = useStyles()
  const { idDeliveryOrder } = useParams()

  useEffect(() => () => resetDeliveryOrder(), [resetDeliveryOrder])

  useEffect(() => {
    if (idDeliveryOrder && idDeliveryOrder !== _id) getDeliveryOrder(idDeliveryOrder)
  }, [idDeliveryOrder])

  useEffect(() => {
    if (provider) getProducts(provider)
  }, [provider])

  /**
   * Handle change data
   * @param {Object} value
   * @private
   */
  const _updateData = value => {
    updateDataDeliveryOrder(idDeliveryOrder, value)
  }

  return (
    <Page className={classes.root} title={`${nameProvider} | Albarán`}>
      <Container maxWidth={false}>
        <Header
          nameProvider={nameProvider}
          provider={provider}
          readOnly={Boolean(nOrder)}
          invoice={invoice}
        />

        {
          date && (
            <DeliveryOrderProducts
              products={products}
              showDeleteProductModal={showDeleteProductModal}
              showEditProductModal={showEditProductModal}
              isEditable={!nOrder}
              hasCanal={hasCanal}
            />
          )
        }

        <Grid container spacing={3} className={classes.cards}>
          <Grid item xs={12} md={4}>
            <DeliveryOrderData
              date={date}
              readOnly={Boolean(nOrder)}
              updateData={_updateData}
              note={note}
              idDeliveryOrder={idDeliveryOrder}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <DeliveryOrderTotals totals={totals} isEditable={!nOrder} />
          </Grid>
        </Grid>

      </Container>
    </Page>
  )
}

DeliveryOrder.propTypes = {
  getProducts: PropTypes.func.isRequired,
  getDeliveryOrder: PropTypes.func.isRequired,
  provider: PropTypes.string,
  nameProvider: PropTypes.string,
  products: PropTypes.array.isRequired,
  date: PropTypes.number,
  totals: PropTypes.object,
  _id: PropTypes.string,
  nOrder: PropTypes.number,
  updateDataDeliveryOrder: PropTypes.func.isRequired,
  showDeleteProductModal: PropTypes.func.isRequired,
  showEditProductModal: PropTypes.func.isRequired,
  resetDeliveryOrder: PropTypes.func.isRequired,
  note: PropTypes.string,
  hasCanal: PropTypes.bool,
  invoice: PropTypes.string
}

DeliveryOrder.displayName = 'DeliveryOrder'
export const story = DeliveryOrder
export default DeliveryOrder
