/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo } from 'react';
import { adaptV4Theme } from '@mui/material/styles';
import { Router } from 'react-router-dom';
import AdapterMoment from '@mui/lab/AdapterMoment';
import { ThemeProvider, StyledEngineProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/lab';
import { LoadingBar } from 'react-redux-loading-bar';

import Auth from 'components/Auth';
import ScrollReset from 'components/ScrollReset';
import useSettings from 'hooks/useSettings';
import { createTheme } from 'theme';
import Routes from 'Routes';
import history from 'store/history';
import { ModalRoot } from 'components';
import Notification from './components/Notification';
import './utils/axios';
import RootStyles from './theme/RootStyles';

const App = () => {
  const { settings } = useSettings();
  const theme = useMemo(() => createTheme(adaptV4Theme(settings)), [settings.theme]);

  return (
    <RootStyles>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <Router history={history}>
              <LoadingBar
                style={{
                  zIndex: 999999,
                  backgroundColor: theme.palette.secondary.main,
                  height: '5px',
                }}
              />
              <Notification />
              <Auth>
                <ScrollReset />
                <Routes />
                <ModalRoot />
              </Auth>
            </Router>
          </LocalizationProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </RootStyles>
  );
};

export default App;
