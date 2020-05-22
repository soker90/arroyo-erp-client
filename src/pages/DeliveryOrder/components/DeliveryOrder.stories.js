import React from 'react';

import {story as DeliveryOrder} from './DeliveryOrder';
import RoutesWrapper from 'story/RoutesWrapper';

export default {
  title: 'Rutas|Albarán',
  parameters: {
    component: DeliveryOrder,
    componentSubtitle: 'Vista de albarán',
  },
  decorators: [storyFn => <RoutesWrapper>{storyFn()}</RoutesWrapper>],
};

const DeliveryOrderStory = () =>
  <DeliveryOrder/>;

DeliveryOrderStory.story = {
  name: 'Vista',
};

export {DeliveryOrderStory};
