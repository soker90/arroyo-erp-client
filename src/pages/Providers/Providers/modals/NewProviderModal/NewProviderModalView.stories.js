import React from 'react';
import {action} from '@storybook/addon-actions';

import {story as NewProviderModal} from './NewProviderModalView';

export default {
  title: 'Rutas|Proveedores/Modifcar',
  parameters: {
    component: NewProviderModal,
    componentSubtitle: 'Modal para crear o editar un preveedor',
  },
};

const ProviderNew = () =>
  <NewProviderModal
    show={true}
    close={action('Cerrar modal')}
    createProvider={action('Crea el proveedor')}
    idProvider='888883h339'
    provider={false}
  />;

ProviderNew.story = {
  name: 'Crear',
};

const ProviderEdit = () =>
  <NewProviderModal
    show={true}
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
  />;

ProviderEdit.story  = {
  name: 'Editar',
};

export {ProviderNew, ProviderEdit};
