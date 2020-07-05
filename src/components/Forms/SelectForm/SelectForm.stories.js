import React from 'react';
import { number, select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { story as SelectForm } from './SelectForm';

export default {
  title: 'Formularios/Select',
  parameters: {
    component: SelectForm,
  },
};

const Select = () => (
  <SelectForm
    size={number('Tamaño', 3)}
    label={text('Label', 'Selección')}
    onChange={action('Elemento seleccionado')}
    value={select('Opción', [0, 1], 0)}
  >
    <option value={0}>Opción 1</option>
    <option value={1}>Opción 2</option>
  </SelectForm>
);

Select.storyName = 'Select';

export { Select };
