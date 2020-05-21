import React from 'react';
import DashboardView from './DashboardView';

import {withKnobs} from '@storybook/addon-knobs';
import RoutesWrapper from 'story/RoutesWrapper';

export default {
  title: 'Rutas|Inicio',
  parameters: {
    component: DashboardView,
    componentSubtitle: 'Vista del dashboard de inicio',
  },
  decorators: [withKnobs],
};

const Dashboard = () => {
  return <RoutesWrapper>
    <DashboardView/>
  </RoutesWrapper>;
}

Dashboard.story = {
  name: 'Inicio',
};

export {Dashboard};
