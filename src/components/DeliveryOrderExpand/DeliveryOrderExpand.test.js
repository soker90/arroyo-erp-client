import { fireEvent, render } from '@testing-library/react';

import { DeliveryOrderExpandStory } from './DeliveryOrderExpand.stories';
import { RoutesWrapper, ThemeWrapper } from '../../story';

describe('DeliveryOrderExpandHeader', () => {
  it('renders without crash', async () => {
    const { findByTestId } = render(
      <RoutesWrapper>
        <ThemeWrapper>
          <DeliveryOrderExpandStory/>
        </ThemeWrapper>
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
        <ThemeWrapper>
          <DeliveryOrderExpandStory/>
        </ThemeWrapper>
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
