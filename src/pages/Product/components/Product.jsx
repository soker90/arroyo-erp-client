import { useParams } from 'react-router'

import { LoadingScreen, Page, PricesChart, Container } from 'components'
import { useProduct } from 'hooks'

import { useLastDeliveryOrder } from '../hooks'
import Header from './Header'
import ProductData from './ProductData'
import PricesTable from './PricesTable'

const Product = () => {
  const { id } = useParams()

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
    <Page className='min-h-full py-6' title={`${product.name} | Producto`}>
      <Container>
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
          product={product} className='mt-4' provider={product.provider}
          editProduct={editProduct}
        />

        {Boolean(prices.length) &&
          (
            <>
              <PricesChart prices={reversePrices} className='mt-6' />
              {Boolean(pvps?.length) && <PricesChart
                prices={pvps} className='mt-6'
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
