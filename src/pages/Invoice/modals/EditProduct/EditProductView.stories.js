/* eslint-disable */
import React from 'react';
import { action } from '@storybook/addon-actions';

import { story as EditProductModalView } from './EditProductModalView';

export default {
  title: 'Rutas|Albarán/Modales/Editar prducto',
  parameters: {
    component: EditProductModalView,
    componentSubtitle: 'Modal para editar un producto del albarán',
  },
};

const EditProduct = () => (
  <EditProductModalView
    show={true}
    close={action('Cerrar modal')}
    updateProductOfDeliveryOrder={action('updateProductOfDeliveryOrder')}
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

EditProduct.story = {
  name: 'Editar producto',
};

export { EditProduct };
