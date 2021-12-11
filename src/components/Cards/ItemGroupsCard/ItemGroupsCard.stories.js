import { number } from '@storybook/addon-knobs';
import { Card, CardContent } from '@mui/material';
import { story as ItemGroupsCard } from './ItemGroupsCard';

export default {
  title: 'Componentes/Item Group Card',
  parameters: {
    component: ItemGroupsCard,
    componentSubtitle: 'Muestra una lista de ItemCard en las columnas indicadas',
  },
  decorators: [storyFn => (
    <Card>
      <CardContent>{storyFn()}</CardContent>
    </Card>
  )],
};

const items = [
  { label: 'Uno', value: 'Texto' },
  { label: 'Dos', value: 'Texto' },
  { label: 'Tres', value: true, variant: 'boolean' },
  { label: 'Cuatro', value: 'Texto' },
  { label: 'Cinco', value: false, variant: 'boolean' },
  { label: 'Seis', value: 'Texto' },
  { label: 'Siete', value: 11.6, variant: 'euro' },
  { label: 'Ocho', value: true, variant: 'boolean' },
  { label: 'Nueve', value: 5.16, variant: 'euro' },
  { label: 'Diez', value: 'Texto' },
];

const CardGroup = () => (
  <ItemGroupsCard
    items={items}
    groups={number('Columnas', 2)}
  />
);

CardGroup.storyName = 'Item Card Group';

export { CardGroup };
