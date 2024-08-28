import { Page, Container } from 'components'
import Header from './Header'
import ProductsTable from './ProductsTable'

import { useProducts } from '../hooks'

const Products = () => {
  const {
    products,
    createProduct,
    editProduct,
    deleteProduct
  } = useProducts()

  return (
    <Page className='min-h-full py-6' title='Productos para clientes'>
      <Container>
        <Header createProduct={createProduct} />
        <ProductsTable products={products} editProduct={editProduct} deleteProduct={deleteProduct} />
      </Container>
    </Page>
  )
}
export default Products
