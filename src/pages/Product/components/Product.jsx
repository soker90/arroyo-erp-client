import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router'
import { Container } from '@mui/material'

import { LoadingScreen, Page, PricesChart } from 'components'
import Header from './Header'
import { useStyles } from './Product.styles'
import ProductData from './ProductData/ProductData'
import PricesTable from './PricesTable'

const Product = ({
  product,
  prices,
  getProduct,
  getLastDeliveryOrder,
  nextToLast,
  last
}) => {
  const { id } = useParams()
  const classes = useStyles()
  const [reversePrices, setReversePrices] = useState([])

  useEffect(() => {
    if (id) {
      getProduct(id)
      getLastDeliveryOrder(id)
    }
  }, [id])

  useEffect(() => {
    const clone = prices.slice()
    setReversePrices(clone.reverse())
  }, [prices])

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
        />

        <ProductData product={product} className={classes.table} provider={product.provider} />

        {Boolean(prices.length) &&
          (
            <>
              <PricesChart prices={reversePrices} className={classes.chart} />
              <PricesTable prices={prices} provider={product.provider} />
            </>
          )}

      </Container>
    </Page>
  )
}

Product.propTypes = {
  getProduct: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
  prices: PropTypes.array.isRequired,
  getLastDeliveryOrder: PropTypes.func.isRequired,
  last: PropTypes.string,
  nextToLast: PropTypes.string
}

export const story = Product
export default Product
