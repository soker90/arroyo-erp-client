/* eslint-disable import/no-extraneous-dependencies */
import { RoutesWrapper } from 'story';
import { story as DeliveryOrderExpand } from './index';

export default {
  title: 'Componentes/DeliveryOrderExpand',
  parameters: {
    component: DeliveryOrderExpand,
    componentSubtitle: 'Información de un albarán expandible',
  },
  decorators: [storyFn => (
    <RoutesWrapper>{storyFn()}</RoutesWrapper>
  )],
};

const products = [
  {
    name: 'Producto',
    quantity: 12,
    price: 13.68,
    taxBase: 41.3,
  },
  {
    name: 'Nombre',
    quantity: 12.33,
    price: 6.1,
    taxBase: 33.33,
  },
];
const DeliveryOrderExpandStory = () => (
  <DeliveryOrderExpand
    products={products}
    date={1609005471740}
    note={'Esto es una nota'}
    taxBase={100}
    iva={10}
    re={2}
    total={112}
    _id='idString'
  />
);

DeliveryOrderExpandStory.storyName = 'DeliveryOrderExpand';

export { DeliveryOrderExpandStory };
