import { story as PricesTable } from './PricesTable';

export default {
  title: 'Rutas/Producto/Precios',
  parameters: {
    component: PricesTable,
    componentSubtitle: 'Tabla con el histórico de precios',
  },
};

const PricesStory = () => (
  <PricesTable
    prices={
      [{
        date: 1594288020000,
        price: 1,
      }, {
        date: 1594927200000,
        price: 2,
      }]
    }
  />
);

PricesStory.storyName = 'Tabla de precios';

export { PricesStory };
