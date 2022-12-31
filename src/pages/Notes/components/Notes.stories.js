import { action } from '@storybook/addon-actions'

import RoutesWrapper from 'story/RoutesWrapper'
import { ReduxProvider } from 'story'
import DatePickerProvider from 'contexts/DatePickerProvider'
import Notes from './Notes'

const NOTES = [
  {
    _id: 'unIDDD',
    date: 1609802700330,
    concept: 'Este es el concepto',
    quantity: '22€',
    price: '33€',
    amount: '88€',
    clarification: 'Una observación'
  },
  {
    _id: 'unIDDD1',
    date: 1609802700330,
    concept: 'Este es el concepto',
    quantity: '22€',
    price: '33€',
    amount: '88€',
    clarification: 'Una observación'
  }, {
    _id: 'unIDDD2',
    date: 1609802700330,
    concept: 'Este es el concepto',
    quantity: '22€',
    price: '33€',
    amount: '88€',
    clarification: 'Una observación'
  }
]

export default {
  title: 'Rutas/Notas',
  parameters: {
    component: Notes,
    componentSubtitle: 'Vista'
  },
  decorators: [storyFn => (
    <DatePickerProvider>
      <ReduxProvider>
        <RoutesWrapper>
          {storyFn()}
        </RoutesWrapper>
      </ReduxProvider>
    </DatePickerProvider>
  )
  ]
}

const NotesStory = () => (
  <Notes
    notes={NOTES}
    getNotes={action('getNotes')}
  />
)

NotesStory.storyName = 'Vista'

export { NotesStory }
