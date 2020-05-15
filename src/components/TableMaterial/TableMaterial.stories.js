import React from 'react';
import {action} from '@storybook/addon-actions';
import {number, select, withKnobs} from '@storybook/addon-knobs';

import ThemeWrapper from 'story/ThemeWrapper';
import TableMaterial from './TableMaterial';
import dataFormat from '../../utils/dataFormat';
import {THEMES} from '../../constants';

export default {
  title: 'Componentes/Tabla',
  component: TableMaterial,
  decorators: [withKnobs],
};

const Table = () => {
  return <ThemeWrapper theme={select('Tema', THEMES, THEMES.LIGHT)}>
    <TableMaterial
      columns={[
        {
          title: 'Columna 1',
          field: 'column',
        },
        {
          title: 'Columna 2',
          field: 'date',
          render: ({date}) => dataFormat.dateShort(date),
        },
        {
          title: 'Columna 3',
          field: 'column3',
        },
      ]}
      data={[{column: 'Valor 1', date: new Date(), column3: 'Otro valor'}]}
      title="Mi tabla"
      refresh={action('Actualiza la tabla')}
      onRowClick={action('Se ha pulsado en una fila')}
      count={number('Numero de elementos', 20)}
    />
  </ThemeWrapper>;
}

export {Table};
