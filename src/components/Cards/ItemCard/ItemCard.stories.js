import React from 'react';

import { boolean, text } from '@storybook/addon-knobs';
import { Card, CardContent } from '@material-ui/core';
import { story as ItemCard } from './ItemCard';

export default {
  title: 'Componentes/Item Card',
  parameters: {
    component: ItemCard,
    componentSubtitle: 'Muestra datos del tipo [Texto: valor] dentro de una tarjeta',
  },
};

const Item = () => (
  <Card>
    <CardContent>
      <ItemCard
        value={text('Texto', 'Mi texto')}
        label={text('Etiqueta', 'Etiqueta')}
        divider={boolean('Separador', true)}
      />
    </CardContent>
  </Card>
);

Item.storyName = 'Item Card';

export { Item };
