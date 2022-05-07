import 'react-perfect-scrollbar/dist/css/styles.css';
import 'nprogress/nprogress.css';
import 'moment/locale/es';

import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { SettingsProvider } from 'context/SettingsContext';
import { configureStore } from 'store';
import { restoreSettings } from 'utils/settings';
import App from 'App';

const store = configureStore();
const settings = restoreSettings();

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <SettingsProvider settings={settings}>
      <App />
    </SettingsProvider>
  </Provider>
);

// TODO: Activar mas adelante y configurar notificaciones de actualizaciones
// serviceWorker.unregister();
