import { action } from '@storybook/addon-actions';

import { story as MergePaymentModal } from './MergePaymentModal';

export default {
  title: 'Rutas/Albarán/Modales/Eliminar prducto',
  parameters: {
    component: MergePaymentModal,
    componentSubtitle: 'Modal de confimación para eliminar un producto del albarán',
  },
};

const MergeModal = () => (
  <MergePaymentModal
    selected={[]}
    mergePayments={action('mergePayments')}
    // eslint-disable-next-line
    show={true}
    close={action('Cerrar modal')}
    deleteProductOfDeliveryOrder={action('deleteProductOfDeliveryOrder')}
    index={0}
  />
);

MergeModal.storyName = 'Eliminar producto';

export { MergeModal };
