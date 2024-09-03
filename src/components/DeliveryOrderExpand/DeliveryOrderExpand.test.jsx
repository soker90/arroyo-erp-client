// @vitest-environment happy-dom
import { fireEvent, render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { TooltipProvider } from 'components'
import { RoutesWrapper } from '../../story'
import DeliveryOrderExpand from './index'

const products = [
  {
    name: 'Producto',
    quantity: 12,
    price: 13.68,
    taxBase: 41.3
  },
  {
    name: 'Nombre',
    quantity: 12.33,
    price: 6.1,
    taxBase: 33.33
  }
]
const DeliveryOrderExpandStory = () => (
  <DeliveryOrderExpand
    products={products}
    date={1609005471740}
    note='Esto es una nota'
    taxBase={100}
    iva={10}
    re={2}
    total={112}
    _id='idString'
  />
)

describe('DeliveryOrderExpandHeader', () => {
  it('renders without crash', async () => {
    const { findByTestId } = render(
      <RoutesWrapper>
        <TooltipProvider>
          <DeliveryOrderExpandStory />
        </TooltipProvider>
      </RoutesWrapper>
    )

    const expandHeader = await findByTestId('delivery-order-expand-header')

    expect(expandHeader)
      .toBeDefined()
  })

  it('click and expand', () => {
    const {
      getByText,
      container
    } = render(
      <RoutesWrapper>
        <TooltipProvider>
          <DeliveryOrderExpandStory />
        </TooltipProvider>
      </RoutesWrapper>
    )

    fireEvent(
      container.querySelector('[type="button"]'),
      new window.MouseEvent('click', {
        bubbles: true,
        cancelable: true
      })
    )

    expect(getByText(/Base imponible/i))
      .toBeDefined()
  })
})
