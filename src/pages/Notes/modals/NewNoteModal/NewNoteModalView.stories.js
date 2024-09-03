/* eslint-disable import/no-extraneous-dependencies */
import { action } from '@storybook/addon-actions'

import { story as NewNoteModal } from './NewNoteModalView'

export default {
  title: 'Rutas/Notas/Modales/Nueva',
  parameters: {
    component: NewNoteModal,
    componentSubtitle: 'Modal para crear notas'
  }
}

const NoteNew = () => (
  <NewNoteModal
    show
    close={action('Cerrar modal')}
    createNote={action('Crear nota')}
  />
)

NoteNew.storyName = 'Crear'

export { NoteNew }
