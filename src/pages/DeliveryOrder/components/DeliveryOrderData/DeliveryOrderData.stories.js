import { action } from '@storybook/addon-actions'
import { boolean } from '@storybook/addon-knobs'
import { story as DeliveryOrderData } from './DeliveryOrderData'
import { DatePickerProvider, ReduxProvider, RoutesWrapper } from '../../../../story'

export default {
  title: 'Rutas/Albarán/Datos',
  parameters: {
    component: DeliveryOrderData,
    componentSubtitle: 'Tabla de productos'
  },
  decorators: [storyFn => (
    <ReduxProvider>
      <RoutesWrapper>
        <DatePickerProvider>
          {storyFn()}
        </DatePickerProvider>
      </RoutesWrapper>
    </ReduxProvider>
  )
  ]
}

/**
 * code, productName, quantity, price, amount, diff
 */

const DeliveryOrderProductsStory = () => (
  <DeliveryOrderData
    products={[
      {
        code: '2345',
        productName: 'Pollo',
        quantity: 6.6,
        price: 1.3,
        amount: 15,
        diff: -1.2
      },
      {
        code: '1111',
        productName: 'Lentejas',
        quantity: 2,
        price: 3.3,
        amount: 1,
        diff: 6.35
      },
      {
        code: '6846',
        productName: 'Pan',
        quantity: 2,
        price: 0.5,
        amount: 1,
        diff: 0
      }
    ]}
    readOnly={boolean('Solo lectura', false)}
    updateData={action('updateData')}
    date={1609802700330}
    note='Esto es una nota'
  />
)

DeliveryOrderProductsStory.storyName = 'Productos'

export { DeliveryOrderProductsStory }
