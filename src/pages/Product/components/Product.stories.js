import { action } from '@storybook/addon-actions'

import { RoutesWrapper } from 'story'
import { story as Product } from './Product'

export default {
  title: 'Rutas/Producto',
  parameters: {
    component: Product,
    componentSubtitle: 'Vista de producto'
  },
  decorators: [storyFn => (
    <RoutesWrapper>
      {storyFn()}
    </RoutesWrapper>
  )
  ]
}

const ProductStory = () => (
  <Product
    product={{
      _id: 'dfsdf33',
      provider: '0024',
      nameProvider: 'Proveedor U',
      code: 'cod',
      name: 'Pollo',
      price: 12.3,
      iva: 1.2,
      re: 2.3,
      rate: 9
    }}
    getProduct={action('getProduct')}
    match={{ params: { id: 'ggggg7777' } }}
    prices={
      [{
        date: 1594288020000,
        price: 1
      }, {
        date: 1594927200000,
        price: 2
      }]
    }
  />
)

ProductStory.storyName = 'Vista'

export { ProductStory }
