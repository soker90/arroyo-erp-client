import { action } from '@storybook/addon-actions'
import DeliveryOrderProducts from './DeliveryOrderProducts'
import RoutesWrapper from '../../../../story/RoutesWrapper'

export default {
  title: 'Rutas/Albarán/Productos',
  parameters: {
    component: DeliveryOrderProducts,
    componentSubtitle: 'Tabla de productos'
  },
  decorators: [storyFn => (
    <RoutesWrapper>
      {storyFn()}
    </RoutesWrapper>
  )
  ]
}

const DeliveryOrderProductsStory = () => (
  <DeliveryOrderProducts
    products={[
      {
        code: '2345',
        name: 'Pollo',
        quantity: 6.6,
        price: 1.3,
        taxBase: 15,
        diff: -1.2
      },
      {
        code: '1111',
        name: 'Lentejas',
        quantity: 2,
        price: 3.3,
        taxBase: 1,
        diff: 6.35
      },
      {
        code: '6846',
        name: 'Pan',
        quantity: 2,
        price: 0.5,
        taxBase: 1,
        diff: 0
      }
    ]}
    updatePrice={action('updatePrice')}
    showEditProductModal={action('showEditProductModal')}
    showDeleteProductModal={action('showDeleteProductModal')}
    isEditable
    hasCanal={false}
  />
)

DeliveryOrderProductsStory.storyName = 'Productos'

export { DeliveryOrderProductsStory }
