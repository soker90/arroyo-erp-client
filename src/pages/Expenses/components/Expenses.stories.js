import { action } from '@storybook/addon-actions';

import RoutesWrapper from 'story/RoutesWrapper';
import { ReduxProvider } from 'story';
import { story as Expenses } from './Expenses';

export default {
  title: 'Rutas/Gastos',
  parameters: {
    component: Expenses,
    componentSubtitle: 'Vista',
  },
  decorators: [storyFn =>
    <ReduxProvider><RoutesWrapper>{storyFn()}</RoutesWrapper></ReduxProvider>],
};

const providers = [
  {
    _id: '456789okjs',
    name: 'Proveedor 1',
  },
  {
    _id: '4567s3389okjs',
    name: 'Proveedor 2',
  },
];

const ExpensesDefault = () => (
  <Expenses
    providers={providers}
    getProviders={action('getProviders')}
    showCreateModal={action('Muestra la modal de crear proveedor')}
  />
);

ExpensesDefault.storyName = 'Vista';

export { ExpensesDefault };
