// @vitest-environment happy-dom
import { render, screen, act, setupMsw } from 'tests/testUtils'
import { describe, expect, it, beforeEach, vi, afterEach } from 'vitest'

import { TooltipProvider } from 'components'
import { SettingsProvider } from 'context/SettingsContext'
import { restoreSettings } from 'utils/settings'

import Clients from './Clients'

const settings = restoreSettings()

const notificationMock = {
  showError: vi.fn()
    .mockImplementation((a) => console.error(a))
}

vi.mock('../../../hooks/useNotifications', () => {
  return {
    useNotifications: () => notificationMock
  }
})

describe('Clients', () => {
  setupMsw()
  beforeEach(() => {
    act(() => {
      render(
        <SettingsProvider settings={settings}>
          <TooltipProvider>
            <Clients />
          </TooltipProvider>
        </SettingsProvider>
      )
    }
    )
  })

  afterEach(() => {
    vi.clearAllMocks()
    vi.restoreAllMocks()
  })

  it('should render with clients and without erros', () => {
    expect(screen.getAllByText('Clientes'))
      .toBeDefined()
    expect(notificationMock.showError)
      .not
      .toHaveBeenCalled()
  })

  it('when user click the Nuevo Cliente button should render the modal', async () => {
    await act(async () => {
      const button = screen.getByText('Nuevo Cliente')
      button.click()
    })
    const newClient = screen.getByText('Crear cliente')
    expect(newClient).toBeDefined()
  })
})
