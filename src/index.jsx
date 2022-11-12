import 'react-perfect-scrollbar/dist/css/styles.css'
import 'nprogress/nprogress.css'
import 'dayjs/locale/es'

import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { SettingsProvider } from 'context/SettingsContext'
import SwrProvider from './contexts/SwrProvider'
import { configureStore } from 'store'
import { restoreSettings } from 'utils/settings'
import App from './App'

const store = configureStore()
const settings = restoreSettings()

if (import.meta.env.MODE === 'development' && import.meta.env.VITE_MOCKS === 'true') {
  import('./mocks/browser').then(({ worker }) => {
    worker.start()
  })
}

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <Provider store={store}>
    <SwrProvider>
      <SettingsProvider settings={settings}>
        <App />
      </SettingsProvider>
    </SwrProvider>
  </Provider>
)
