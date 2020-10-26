/* eslint-disable */
import { action } from '@storybook/addon-actions';

import { story as AddProductModalView } from './AddProductModalView';

export default {
  title: 'Rutas/Albarán/Modales/Añadir prducto',
  parameters: {
    component: AddProductModalView,
    componentSubtitle: 'Modal para añadir un producto al albarán',
  },
};

const AddProduct = () => (
  <AddProductModalView
    show={true}
    close={action('Cerrar modal')}
    addProductToDeliveryOrder={action('addProductToDeliveryOrder')}
    products={[{
      _id: '5e5c14f032363ddc735c12cc',
      name: 'Pollo',
      code: '200',
    }, {
      _id: '5e63f6e60cbb826a53a78e25',
      name: 'Chorizo',
      code: '2222',
    },
    ]}
  />
);

AddProduct.storyName = 'Añadir producto';

export { AddProduct };
