import { action } from '@storybook/addon-actions'

import RoutesWrapper from 'story/RoutesWrapper'
import { ReduxProvider } from 'story'
import { story as DeliveryOrders } from './DeliveryOrders'

export default {
  title: 'Rutas/Informes/Albaranes',
  parameters: {
    component: DeliveryOrders,
    componentSubtitle: 'Vista'
  },
  decorators: [storyFn => (
    <ReduxProvider>
      <RoutesWrapper>
        {storyFn()}
      </RoutesWrapper>
    </ReduxProvider>
  )
  ]
}

const DeliveryOrdersStory = () => (
  <DeliveryOrders
    doCount={[{
      name: 'Proveedor',
      provider: '1111ffvvp.',
      1: 1,
      2: 2,
      3: 2,
      4: 1,
      total: 6
    }]}
    getDeliveryOrderCount={action('getDeliveryOrderCount')}
  />
)

DeliveryOrdersStory.storyName = 'Vista'

export { DeliveryOrdersStory }
