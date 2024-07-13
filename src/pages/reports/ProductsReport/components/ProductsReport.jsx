import { useState } from 'react'
import { ShoppingCart, Users } from 'lucide-react'

import {
  Header, ListActions, LoadingScreen, Page, PricesChart, Container, Grid
} from 'components'
import { useProducts, useProduct, useProviders } from 'hooks'

const ProductsReport = () => {
  const [providersSelected, setProvidersSelected] = useState(undefined)
  const [productSelected, setProductSelected] = useState(undefined)

  const { providers } = useProviders()
  const { products } = useProducts(providersSelected, true)
  const {
    prices,
    pvps
  } = useProduct(productSelected)

  const _handleClickProvider = ({ _id }) => {
    setProvidersSelected(_id)
  }

  const _handleClickProduct = ({ _id }) => {
    setProductSelected(_id)
  }
  if (!providers.length) return <LoadingScreen />

  return (
    <Page className='py-6' title='Informes de producto'>
      <Container>
        <Header title='Informes de producto' />
        <Grid container spacing={2} className='mt-1'>
          <Grid item xs={6} md={2}>
            <ListActions
              data={providers}
              Icon={Users}
              title='Proveedores'
              onClick={_handleClickProvider}
            />
          </Grid>
          <Grid item xs={6} md={2}>
            <ListActions
              data={products}
              Icon={ShoppingCart}
              title='Productos'
              onClick={_handleClickProduct}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            {Boolean(prices?.length) &&
              (
                <div className='sticky top-6'>
                  <PricesChart prices={structuredClone(prices).reverse()} />
                  <PricesChart
                    prices={pvps}
                    title='Gráfica de precios de venta'
                    tooltip='Venta'
                    lineColor='#f73378'
                    className='mt-4'
                  />
                </div>
              )}
          </Grid>
        </Grid>

      </Container>
    </Page>
  )
}

export default ProductsReport
