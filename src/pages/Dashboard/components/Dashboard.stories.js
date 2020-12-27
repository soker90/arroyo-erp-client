import RoutesWrapper from 'story/RoutesWrapper';
import { action } from '@storybook/addon-actions';
import DashboardView from './DashboardView';
import { ReduxProvider } from '../../../story';

export default {
  title: 'Rutas/Inicio',
  parameters: {
    component: DashboardView,
    componentSubtitle: 'Vista del dashboard de inicio',
  },
};

const Dashboard = () => (
  <ReduxProvider>
    <RoutesWrapper>
      <DashboardView
        priceChanges={[]}
        getDashboard={action('getDashboard')}
        reminders={[]}
        createReminder={action('createReminder')}
      />
    </RoutesWrapper>
  </ReduxProvider>
);

Dashboard.storyName = 'Inicio';

export { Dashboard };
