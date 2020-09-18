import React from 'react';
import { action } from '@storybook/addon-actions';

import { story as NewProviderModal } from './NewProviderModalView';

export default {
  title: 'Rutas/Gastos/Modales/Nuevo',
  parameters: {
    component: NewProviderModal,
    componentSubtitle: 'Modal para crear o editar un preveedor',
  },
};

const ProviderNew = () => (
  <NewProviderModal
    show
    close={action('Cerrar modal')}
    createProvider={action('Crea el proveedor')}
    idProvider='888883h339'
    provider={false}
  />
);

ProviderNew.storyName = 'Crear';

const ProviderEdit = () => (
  <NewProviderModal
    show
    close={action('Cerrar modal')}
    editProvider={action('Edita el proveedor')}
    idProvider='888883h339'
    provider={{
      name: 'Mi proveedor',
      address: 'C/ Falsa, 9',
      phone: '66677766677',
      email: 'email@email.com',
      businessName: 'Email SL',
      cif: 'B5555552',
    }}
  />
);

ProviderEdit.storyName = 'Editar';

export { ProviderNew, ProviderEdit };
