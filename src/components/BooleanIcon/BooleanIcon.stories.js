import {story as BooleanIcon} from './BooleanIcon';

import {boolean} from '@storybook/addon-knobs';
import ThemeWrapper from 'story/ThemeWrapper';

export default {
  title: 'Formularios/Boolean Icon',
  parameters: {
    component: BooleanIcon,
    componentSubtitle: 'Muestra un aspa roja o un check verde',
  },
  component: BooleanIcon,
};

const Icon = () => {
  return <ThemeWrapper>
    <BooleanIcon value={boolean('Activado', true)}/>
  </ThemeWrapper>;
}

Icon.storyName = 'Boolean Icon';

export {Icon};
