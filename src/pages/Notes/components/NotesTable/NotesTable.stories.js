import React from 'react';

import RoutesWrapper from 'story/RoutesWrapper';
import { story as NotesTable } from './NotesTable';
import { ReduxProvider } from '../../../../story';
import DatePickerProvider from '../../../../contexts/DatePickerProvider';

export default {
  title: 'Rutas/Notas/Tabla de notas',
  parameters: {
    component: NotesTable,
    componentSubtitle: 'Vista',
  },
  decorators: [storyFn => (
    <DatePickerProvider>
      <ReduxProvider>
        <RoutesWrapper>
          {storyFn()}
        </RoutesWrapper>
      </ReduxProvider>
    </DatePickerProvider>
  ),
  ],
};

/**
 * code, productName, quantity, price, amount, diff
 */

const NotesTableStory = () => (
  <NotesTable
    notes={[]}
  />
);

NotesTableStory.storyName = 'Vista';

export { NotesTableStory };
