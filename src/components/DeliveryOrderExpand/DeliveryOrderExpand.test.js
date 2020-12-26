import { fireEvent, render } from '@testing-library/react';

import { DeliveryOrderExpandStory } from './DeliveryOrderExpand.stories';
import { RoutesWrapper } from '../../story';

describe('DeliveryOrderExpandHeader', () => {
  it('renders without crash', async () => {
    const { findByTestId } = render(
      <RoutesWrapper>
        <DeliveryOrderExpandStory />
      </RoutesWrapper>,
    );

    const expandHeader = await findByTestId('delivery-order-expand-header');

    expect(expandHeader)
      .toBeInTheDocument();
  });

  it('click and expand', () => {
    const {
      getByText,
      container,
    } = render(
      <RoutesWrapper>
        <DeliveryOrderExpandStory />
      </RoutesWrapper>,
    );

    fireEvent(
      container.querySelector('[role="button"]'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    );

    expect(getByText(/Base imponible/i))
      .toBeInTheDocument();
  });
});
