// @vitest-environment happy-dom
import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import BooleanIcon from './BooleanIcon.jsx'

describe('BooleanIcon', () => {
  it('renders the icon', async () => {
    const { findByTestId } = render(<BooleanIcon value />)
    expect(await findByTestId('checkIcon'))
      .toBeDefined()
  })

  it('renders false icon', async () => {
    const { findByTestId } = render(<BooleanIcon value={false} />)
    expect(await findByTestId('closeIcon'))
      .toBeDefined()
  })
})
