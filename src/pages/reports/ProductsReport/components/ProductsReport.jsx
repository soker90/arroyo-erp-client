import { useState } from 'react'
import PropTypes from 'prop-types'
import { Container, Grid } from '@mui/material'
import { ShoppingCart, Users } from 'react-feather'

import {
  Header, ListActions, LoadingScreen, Page, PricesChart
} from 'components'
import { useStyles } from './ProductsReport.styles'
import { useProduct } from 'pages/Product/hooks'

const ProductsReport = ({
  providers,
  getProducts,
  products
}) => {
  const classes = useStyles()
  const [productSelected, setProductSelected] = useState(undefined)
  const {
    prices,
    pvps
  } = useProduct(productSelected)

  const _handleClickProvider = ({ _id }) => {
    getProducts(_id)
  }

  const _handleClickProduct = ({ _id }) => {
    setProductSelected(_id)
  }
  if (!providers.length) return <LoadingScreen />

  return (
    <Page className={classes.root} title='Informes de producto'>
      <Container maxWidth={false}>
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

ProductsReport.propTypes = {
  providers: PropTypes.array.isRequired,
  getProducts: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired
}

export default ProductsReport
