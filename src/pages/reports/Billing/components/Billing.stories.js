import { action } from '@storybook/addon-actions';

import RoutesWrapper from 'story/RoutesWrapper';
import { ReduxProvider } from 'story';
import { story as Billing } from './Billing';

export default {
  title: 'Rutas/Facturación',
  parameters: {
    component: Billing,
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
};

/**
 * code, productName, quantity, price, amount, diff
 */

const BookStory = () => (
  <Billing
    billing={[{
      name: 'Nombre de proveedor',
      businessName: 'Proveedor S.L.',
      trimester1: 1200,
      trimester2: 2200,
      trimester3: 200,
      trimester4: 100,
      annual: 9000
    }]}
    getBilling={action('getBilling')}
  />
);

BookStory.storyName = 'Vista';

export { BookStory };
