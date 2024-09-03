import { render } from '@testing-library/react'
import { afterAll, afterEach, beforeAll } from 'vitest'

import SwrProvider from '../contexts/SwrProvider'
import { RoutesWrapper } from '../story'
import { server } from '../mocks/server.js'

const AllTheProviders = ({ children }) => {
  return (
    <SwrProvider>
      <RoutesWrapper>
        {children}
      </RoutesWrapper>
    </SwrProvider>
  )
}

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
// eslint-disable-next-line import/export
export * from '@testing-library/react'

// override render method
// eslint-disable-next-line import/export
export { customRender as render }

export const setupMsw = () => {
  beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
  afterAll(() => server.close())
  afterEach(() => server.resetHandlers())
}
