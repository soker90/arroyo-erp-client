import React from 'react';
import {story as ItemCard} from './ItemCard';

import {boolean, text} from '@storybook/addon-knobs';
import {Card, CardContent} from '@material-ui/core';

export default {
  title: 'Componentes|Item Card',
  parameters: {
    component: ItemCard,
    componentSubtitle: 'Muestra datos del tipo [Texto: valor] dentro de una tarjeta',
  },
};

const Item = () => {
  return <Card>
    <CardContent>
      <ItemCard value={text('Texto', 'Mi texto')} label={text('Etiqueta', 'Etiqueta')}
                divider={boolean('Separador', true)}/>
    </CardContent>
  </Card>;
}

Item.story = {
  name: 'Item Card',
};

export {Item};
