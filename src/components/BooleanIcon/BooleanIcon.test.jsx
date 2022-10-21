// @vitest-environment happy-dom
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { BooleanIcon } from '../index';
import { Icon, IconFalse } from './BooleanIcon.stories';

describe('BooleanIcon', () => {
  it('renders the icon', async () => {
    const { findByTestId } = render(<Icon/>);
    expect(await findByTestId('checkIcon'))
      .toBeDefined();
  });

  it('renders false icon', async () => {
    const { findByTestId } = render(<IconFalse/>);
    expect(await findByTestId('closeIcon'))
      .toBeDefined();
  });
});
