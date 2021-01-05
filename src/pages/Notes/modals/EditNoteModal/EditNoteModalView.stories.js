/* eslint-disable import/no-extraneous-dependencies */
import { action } from '@storybook/addon-actions';

import DatePickerProvider from 'contexts/DatePickerProvider';
import { story as EditNoteModalView } from './EditNoteModalView';

const NOTE = {
  _id: 'ddddddddddd',
  date: 1609802700330,
  concept: 'Un concepto',
  quantity: '12.33',
  price: '22.3',
  amount: '1.2',
  clarification: 'Observaciones',
};

export default {
  title: 'Rutas/Notas/Modales/Editar',
  parameters: {
    component: EditNoteModalView,
    componentSubtitle: 'Modal para editar notas',
  },
  decorators: [storyFn => <DatePickerProvider>{storyFn()}</DatePickerProvider>],
};

const NoteEdit = () => (
  <EditNoteModalView
    show
    close={action('close')}
    editNote={action('editNote')}
    note={NOTE}
  />
);

NoteEdit.storyName = 'Edit';

export { NoteEdit };
