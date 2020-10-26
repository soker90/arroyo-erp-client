import {addDecorator} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';

import ThemeWrapper from '../src/story/ThemeWrapper';

addDecorator(storyFn => <ThemeWrapper>{storyFn()}</ThemeWrapper>);
addDecorator(withKnobs);
