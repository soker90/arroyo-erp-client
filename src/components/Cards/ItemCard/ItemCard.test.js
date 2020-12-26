import { render } from '@testing-library/react';

import { CardDefault, CardBoolean, CardEuro } from './ItemCard.stories';

describe('ItemCard', () => {
  it('renders with text', async () => {
    const { findByText } = render(<CardDefault />);

    const label = await findByText('Etiqueta');
    const value = await findByText('Mi texto');

    expect(label).toBeInTheDocument();
    expect(value).toBeInTheDocument();
  });

  it('renders with boolean icon', async () => {
    const { findByTestId, findByText } = render(<CardBoolean />);

    const label = await findByText('Etiqueta');
    const value = await findByTestId('closeIcon');

    expect(label).toBeInTheDocument();
    expect(value).toBeInTheDocument();
  });

  it('renders with euro number', async () => {
    const { findByText } = render(<CardEuro />);

    const label = await findByText('Etiqueta');
    const value = await findByText('12,64 €');

    expect(label).toBeInTheDocument();
    expect(value).toBeInTheDocument();
  });
});
