import { action } from '@storybook/addon-actions';
import { number, select } from '@storybook/addon-knobs';

import ThemeWrapper from 'story/ThemeWrapper';
import { THEMES } from 'constants/common';
import { format } from 'utils';
import { story as TableMaterial } from './TableMaterial';

export default {
  title: 'Componentes/Tabla',
  component: TableMaterial,
};

const _renderTable = () => (
  <TableMaterial
    columns={[
      {
        title: 'Columna 1',
        field: 'column',
      },
      {
        title: 'Columna 2',
        field: 'date',
        render: ({ date }) => format.date(date),
      },
      {
        title: 'Columna 3',
        field: 'column3',
      },
    ]}
    data={[{ column: 'Valor 1', date: new Date(1609428038070), column3: 'Otro valor' }]}
    title="Mi tabla"
    refresh={action('Actualiza la tabla')}
    onRowClick={action('Se ha pulsado en una fila')}
    count={number('Numero de elementos', 20)}
  />
);

const TableLight = () => (
  <ThemeWrapper theme={select('Tema', THEMES, THEMES.LIGHT)}>
    {_renderTable()}
  </ThemeWrapper>
);

TableLight.storyName = 'Estandar';

const TableDark = () => (
  <ThemeWrapper theme={THEMES.ONE_DARK}>
    {_renderTable()}
  </ThemeWrapper>
);

TableDark.storyName = 'Oscuro';

const TableUnicorn = () => (
  <ThemeWrapper theme={THEMES.UNICORN}>
    {_renderTable()}
  </ThemeWrapper>
);

TableUnicorn.storyName = 'Unicornio';

export { TableLight, TableDark, TableUnicorn };
