/* eslint-disable import/no-extraneous-dependencies */
import { number, text } from '@storybook/addon-knobs';
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
    name: text('Nombre producto', 'Nombre', 'Componente'),
    quantity: number('Cantidad', 12.33, {}, 'Componente'),
    price: number('Precio', 6.1, {}, 'Componente'),
    taxBase: number('Base Imponible', 33.33, {}, 'Componente'),
  },
];
const DeliveryOrderExpandStory = () => (
  <DeliveryOrderExpand
    products={products}
    date={1609005471740}
    note={text('Nota', 'Esto es una nota', 'Componente')}
    taxBase={100}
    iva={10}
    re={2}
    total={112}
    _id='idString'
  />
);

DeliveryOrderExpandStory.storyName = 'DeliveryOrderExpand';

export { DeliveryOrderExpandStory };
