import { Container } from '@mui/material'

import { Page } from 'components'
import Header from './Header'
import ProductsTable from './ProductsTable'
import { useStyles } from './Products.styles'
import { useProducts } from '../hooks'

const Products = () => {
  const classes = useStyles()

  const {
    products,
    createProduct,
    editProduct,
    deleteProduct
  } = useProducts()

  return (
    <Page className={classes.root} title='Productos para clientes'>
      <Container maxWidth={false}>
        <Header createProduct={createProduct} />
        <ProductsTable products={products} editProduct={editProduct} deleteProduct={deleteProduct} />
      </Container>
    </Page>
  )
}
export default Products
