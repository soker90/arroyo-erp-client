import React from 'react';
import {action} from '@storybook/addon-actions';

import {story as Providers} from './Providers';
import RoutesWrapper from 'story/RoutesWrapper';

export default {
  title: 'Rutas|Proveedores',
  parameters: {
    component: Providers,
    componentSubtitle: 'Vista de proveedores',
  },
  decorators: [storyFn => <RoutesWrapper>{storyFn()}</RoutesWrapper>]
};


const providers = [
  {_id: '456789okjs', name: 'Proveedor 1'},
  {_id: '4567s3389okjs', name: 'Proveedor 2'},
];

const ProvidersDefault = () =>
  <Providers
    providers={providers}
    showCreateModal={action('Muestra la modal de crear proveedor')}
  />;

ProvidersDefault.story = {
  name: 'Vista',
};

export {ProvidersDefault};
