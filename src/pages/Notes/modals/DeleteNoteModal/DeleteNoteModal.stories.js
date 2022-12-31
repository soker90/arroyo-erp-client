import { action } from '@storybook/addon-actions'

import DeleteNoteModal from './DeleteNoteModal'

export default {
  title: 'Rutas/Notas/Modales/Eliminar',
  parameters: {
    component: DeleteNoteModal,
    componentSubtitle: 'Modal de confimación para eliminar una nota'
  }
}

const DeleteModal = () => (
  <DeleteNoteModal
    deleteNote={action('deleteNote')}
    id='id'
    close={action('Cerrar modal')}

  />
)

DeleteModal.storyName = 'Eliminar producto'

export { DeleteModal }
