import RoutesWrapper from 'story/RoutesWrapper'
import { action } from '@storybook/addon-actions'
import DashboardView from './DashboardView'

export default {
  title: 'Rutas/Inicio',
  parameters: {
    component: DashboardView,
    componentSubtitle: 'Vista del dashboard de inicio'
  }
}

const Dashboard = () => (
  <RoutesWrapper>
    <DashboardView
      cash={{
        1: 23.3,
        2: 3,
        3: 33.2,
        4: 11.3,
        total: 22
      }}
      getDashboard={action('getDashboard')}
      reminders={[]}
      createReminder={action('createReminder')}
    />
  </RoutesWrapper>
)

Dashboard.storyName = 'Inicio'

export { Dashboard }
