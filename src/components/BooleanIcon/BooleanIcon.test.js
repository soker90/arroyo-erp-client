import { render } from '@testing-library/react';

import { Icon, IconFalse } from './BooleanIcon.stories';

describe('BooleanIcon', () => {
  it('renders the icon', async () => {
    const { findByTestId } = render(<Icon />);
    expect(await findByTestId('checkIcon')).toBeInTheDocument();
  });

  it('renders false icon', async () => {
    const { findByTestId } = render(<IconFalse />);
    expect(await findByTestId('closeIcon')).toBeInTheDocument();
  });
});
