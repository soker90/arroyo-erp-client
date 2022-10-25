// @vitest-environment happy-dom
import { fireEvent, render, screen, act } from 'tests/testUtils'
import { describe, expect, it, beforeAll, vi, afterEach } from 'vitest'

import Clients from './Clients'

const notificationMock = {
  showError: vi.fn()
}

vi.mock('../../../hooks/useNotifications', () => {
  return {
    useNotifications: () => notificationMock
  }
})

describe.only('Clients', () => {
  beforeAll(async () => {
    await act(() => { render(<Clients />) }
    )
  })

  afterEach(() => {
    vi.clearAllMocks()
    vi.restoreAllMocks()
  })

  it('should render with clients', () => {
    expect(screen.getAllByText('Clientes')).toBeDefined()
    // expect(notificationMock.showError).not.toHaveBeenCalled()
  })
})
