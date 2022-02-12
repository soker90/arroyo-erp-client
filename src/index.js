import 'react-perfect-scrollbar/dist/css/styles.css';
import 'nprogress/nprogress.css';
import 'moment/locale/es';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { SWRConfig } from 'swr';

import { SettingsProvider } from 'context/SettingsContext';
import { configureStore } from 'store';
import { restoreSettings } from 'utils/settings';
import { localStorageProvider } from 'utils/localStorageProvider';
import App from 'App';

const store = configureStore();
const settings = restoreSettings();

ReactDOM.render(
  <SWRConfig value={{ provider: localStorageProvider }}>
    <Provider store={store}>
      <SettingsProvider settings={settings}>
        <App />
      </SettingsProvider>
    </Provider>
  </SWRConfig>,
  document.getElementById('root'),
);

// TODO: Activar mas adelante y configurar notificaciones de actualizaciones
// serviceWorker.unregister();
