/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { action } from '@storybook/addon-actions';

import DatePickerProvider from 'contexts/DatePickerProvider';
import { story as NewNoteModal } from './NewNoteModalView';

export default {
  title: 'Rutas/Notas/Nueva',
  parameters: {
    component: NewNoteModal,
    componentSubtitle: 'Modal para crear notas',
  },
  decorators: [storyFn => <DatePickerProvider>{storyFn()}</DatePickerProvider>],
};

const NoteNew = () => (
  <NewNoteModal
    show
    close={action('Cerrar modal')}
    createNote={action('Crear nota')}
  />
);

NoteNew.storyName = 'Crear';

export { NoteNew };
