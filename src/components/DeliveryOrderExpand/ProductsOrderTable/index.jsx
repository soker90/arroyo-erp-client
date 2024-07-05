/* eslint-disable react/prop-types */

import PropTypes from 'prop-types'

import { TableMaterial, TextEuro, Typography } from 'components'
import { format } from 'utils'

const ProductsOrderTable = ({ products, className }) => {
  /**
   * Render message for delivery orders without products
   * @return {Typography}
   * @private
   */
  const _renderNoProducts = () => (
    <Typography className='text-muted-foreground' variant='body1'>
      No hay productos
    </Typography>
  )

  const _renderTable = () => (
    <TableMaterial
      className={className}
      columns={[
        {
          title: 'Producto',
          field: 'name'
        },
        {
          title: 'Cantidad / Peso',
          render: ({ quantity }) => format.number(quantity)
        },
        {
          title: 'Precio',
          render: ({ price }) => <TextEuro num={price} />
        },
        {
          title: 'Base imponible',
          render: ({ taxBase }) => <TextEuro num={taxBase} />
        }
      ]}
      data={products}
      withCard={false}
    />
  )

  return products?.length ? _renderTable() : _renderNoProducts()
}

ProductsOrderTable.propTypes = {
  products: PropTypes.array
}

ProductsOrderTable.displayName = 'ProductsOrderTable'
export const story = ProductsOrderTable
export default ProductsOrderTable
