/* eslint-disable import/no-extraneous-dependencies */
import { boolean } from '@storybook/addon-knobs';
import { story as BooleanIcon } from './BooleanIcon';

export default {
  title: 'Formularios/Boolean Icon',
  parameters: {
    component: BooleanIcon,
    componentSubtitle: 'Muestra un aspa roja o un check verde',
  },
  component: BooleanIcon,
};

const Icon = () => (
  <BooleanIcon value={boolean('Activado', true)} />
);

Icon.storyName = 'Boolean Icon';

const IconFalse = () => (
  <BooleanIcon value={false} />
);

IconFalse.storyName = 'Falso';

export { Icon, IconFalse };
