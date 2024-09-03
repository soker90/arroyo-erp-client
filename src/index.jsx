import 'theme/global.css'

import { createRoot } from 'react-dom/client'
import { SettingsProvider } from 'context/SettingsContext'
import SwrProvider from './contexts/SwrProvider'
import { restoreSettings } from 'utils/settings'
import App from './App'

const settings = restoreSettings()

if (import.meta.env.MODE === 'development' && import.meta.env.VITE_MOCKS === 'true') {
  import('./mocks/browser').then(({ worker }) => {
    worker.start()
  })
}

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <SwrProvider>
    <SettingsProvider settings={settings}>
      <App />
    </SettingsProvider>
  </SwrProvider>
)
