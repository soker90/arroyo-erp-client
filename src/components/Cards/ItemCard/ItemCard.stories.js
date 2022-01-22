import { boolean, select, text } from '@storybook/addon-knobs';
import { Card, CardContent } from '@mui/material';
import { story as ItemCard } from './ItemCard';
import { ThemeWrapper } from '../../../story';

export default {
  title: 'Componentes/Item Card',
  parameters: {
    component: ItemCard,
    componentSubtitle: 'Muestra datos del tipo [Texto: valor] dentro de una tarjeta',
  },
  decorators: [storyFn => (
    <Card>
      <CardContent>{storyFn()}</CardContent>
    </Card>
  )],

};

const CardDefault = () => (
  <ThemeWrapper>
    <ItemCard
      value={text('Texto', 'Mi texto')}
      label={text('Etiqueta', 'Etiqueta')}
      divider={boolean('Separador', true)}
      variant={select('Tipo', ['default', 'boolean', 'euro'], 'default')}
    />
  </ThemeWrapper>
);

CardDefault.storyName = 'Item Card';

const CardBoolean = () => (
  <ItemCard
    value={false}
    label="Etiqueta"
    divider
    variant="boolean"
  />
);

CardBoolean.storyName = 'Boolean';

const CardEuro = () => (
  <ItemCard
    value={12.64}
    label="Etiqueta"
    divider
    variant="euro"
  />
);

CardEuro.storyName = 'Euro';

export { CardDefault, CardBoolean, CardEuro };
