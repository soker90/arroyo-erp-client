import { useState } from 'react'
import { Grid } from '@mui/material'
import { ShoppingCart, Users } from 'lucide-react'

import {
  Header, ListActions, LoadingScreen, Page, PricesChart, Container
} from 'components'
import { useProducts, useProduct, useProviders } from 'hooks'

import { useStyles } from './ProductsReport.styles'

const ProductsReport = () => {
  const classes = useStyles()
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
    <Page className={classes.root} title='Informes de producto'>
      <Container>
        <Header title='Informes de producto' />
        <Grid container spacing={2} className={classes.container}>
          <Grid item xs={6} md={2}>
            <ListActions
              data={providers}
              icon={<Users />}
              title='Proveedores'
              onClick={_handleClickProvider}
            />
          </Grid>
          <Grid item xs={6} md={2}>
            <ListActions
              data={products}
              icon={<ShoppingCart />}
              title='Productos'
              onClick={_handleClickProduct}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            {Boolean(prices?.length) &&
              (
                <div className={classes.charts}>
                  <PricesChart prices={structuredClone(prices).reverse()} />
                  <PricesChart
                    prices={pvps}
                    title='Gráfica de precios de venta'
                    tooltip='Venta'
                    lineColor='#f73378'
                    className={classes.secondChart}
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
