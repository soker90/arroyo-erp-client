import { render } from '@testing-library/react'

import SwrProvider from '../contexts/SwrProvider'
import { RoutesWrapper, ThemeWrapper } from '../story'

const AllTheProviders = ({ children }) => {
  return (
    <ThemeWrapper>
      <SwrProvider>
        <RoutesWrapper>
          {children}
        </RoutesWrapper>
      </SwrProvider>
    </ThemeWrapper>
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
