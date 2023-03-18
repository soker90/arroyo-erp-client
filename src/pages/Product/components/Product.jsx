import { useParams } from 'react-router'
import { Container } from '@mui/material'

import { LoadingScreen, Page, PricesChart } from 'components'

import { useLastDeliveryOrder, useProduct } from '../hooks'
import Header from './Header'
import ProductData from './ProductData'
import PricesTable from './PricesTable'
import { useStyles } from './Product.styles'

const Product = () => {
  const { id } = useParams()
  const classes = useStyles()
  const {
    product,
    prices,
    reversePrices,
    editProduct,
    deleteProduct,
    deletePrice,
    pvps
  } = useProduct(id)

  const {
    last,
    nextToLast
  } = useLastDeliveryOrder(id)

  if (!product._id) return <LoadingScreen />

  return (
    <Page className={classes.root} title={`${product.name} | Producto`}>
      <Container maxWidth={false}>
        <Header
          provider={product.provider}
          nameProvider={product.nameProvider}
          product={product.name}
          lastDeliveryOrder={last}
          nextToLastDeliveryOrder={nextToLast}
          editProduct={editProduct}
          deleteProduct={deleteProduct}
        />

        <ProductData
          product={product} className={classes.table} provider={product.provider}
          editProduct={editProduct}
        />

        {Boolean(prices.length) &&
          (
            <>
              <PricesChart prices={reversePrices} className={classes.chart} />
              {Boolean(pvps?.length) && <PricesChart
                prices={pvps} className={classes.chart}
                title='Gráfica de precios de venta'
                tooltip='Venta'
                lineColor='#f73378'
                                        />}
              <PricesTable prices={prices} provider={product.provider} deletePrice={deletePrice} />
            </>
          )}

      </Container>
    </Page>
  )
}

export const story = Product
export default Product
