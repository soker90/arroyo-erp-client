import RoutesWrapper from 'story/RoutesWrapper';
import { ReduxProvider } from 'story';
import DatePickerProvider from 'contexts/DatePickerProvider';
import { story as NotesTable } from './NotesTable';

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
const NOTES = [
  {
    _id: 'unIDDD',
    date: Date.now(),
    concept: 'Este es el concepto',
    quantity: '22€',
    price: '33€',
    amount: '88€',
    clarification: 'Una observación',
  },
  {
    _id: 'unIDDD1',
    date: Date.now(),
    concept: 'Este es el concepto',
    quantity: '22€',
    price: '33€',
    amount: '88€',
    clarification: 'Una observación',
  }, {
    _id: 'unIDDD2',
    date: Date.now(),
    concept: 'Este es el concepto',
    quantity: '22€',
    price: '33€',
    amount: '88€',
    clarification: 'Una observación',
  },

];

const NotesTableStory = () => (
  <NotesTable
    notes={NOTES}
  />
);

NotesTableStory.storyName = 'Vista';

const NotesTableNoNotesStory = () => (
  <NotesTable
    notes={[]}
  />
);

NotesTableNoNotesStory.storyName = 'Sin notas';

export { NotesTableStory, NotesTableNoNotesStory };
