import { action } from '@storybook/addon-actions'

import DeleteConfirmationModal from './DeletePriceChangeModal'

export default {
  title: 'Rutas/Albarán/Modales/Eliminar prducto',
  parameters: {
    component: DeleteConfirmationModal,
    componentSubtitle: 'Modal de confimación para eliminar un producto del albarán'
  }
}

const DeleteModal = () => (
  <DeleteConfirmationModal
    // eslint-disable-next-line
    show={true}
    close={action('Cerrar modal')}
    deleteProductOfDeliveryOrder={action('deleteProductOfDeliveryOrder')}
    index={0}
  />
)

DeleteModal.storyName = 'Eliminar producto'

export { DeleteModal }
