import { action } from '@storybook/addon-actions'

import { story as DividePaymentModal } from './DividePaymentModal'

export default {
  title: 'Rutas/Albarán/Modales/Eliminar prducto',
  parameters: {
    component: DividePaymentModal,
    componentSubtitle: 'Modal de confimación para eliminar un producto del albarán'
  }
}

const DeleteModal = () => (
  <DividePaymentModal
    // eslint-disable-next-line
    show={true}
    setShow={action('setShow')}
    dividePayment={action('dividePayment')}
    paymentId='234'
    close={action('Cerrar modal')}
    deleteProductOfDeliveryOrder={action('deleteProductOfDeliveryOrder')}
    index={0}
  />
)

DeleteModal.storyName = 'Eliminar producto'

export { DeleteModal }
