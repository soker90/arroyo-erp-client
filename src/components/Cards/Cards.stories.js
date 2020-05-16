import React from 'react';
import ItemCard from './ItemCard';

import {boolean, text, withKnobs} from '@storybook/addon-knobs';
import ThemeWrapper from 'story/ThemeWrapper';
import {Card, CardContent} from '@material-ui/core';

export default {
  title: 'Componentes',
  decorators: [withKnobs],
};

const Item = () => {
  return <ThemeWrapper>
    <Card>
      <CardContent>
        <ItemCard value={text('Texto', 'Mi texto')} label={text('Etiqueta', 'Etiqueta')}
                  divider={boolean('Separador', true)}/>
      </CardContent>
    </Card>
  </ThemeWrapper>;
}

Item.story = {
  name: 'Item Card',
};

export {Item};
