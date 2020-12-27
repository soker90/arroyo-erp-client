import { withKnobs } from '@storybook/addon-knobs';
import RoutesWrapper from 'story/RoutesWrapper';
import { action } from '@storybook/addon-actions';
import DashboardView from './DashboardView';

export default {
  title: 'Rutas/Inicio',
  parameters: {
    component: DashboardView,
    componentSubtitle: 'Vista del dashboard de inicio',
  },
  decorators: [withKnobs],
};

const Dashboard = () => (
  <RoutesWrapper>
    <DashboardView
      priceChanges={[]}
      getDashboard={action('getDashboard')}
      reminders={[]}
      createReminder={action('createReminder')}
    />
  </RoutesWrapper>
);

Dashboard.storyName = 'Inicio';

export { Dashboard };
