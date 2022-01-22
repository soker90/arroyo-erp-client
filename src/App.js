/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo } from 'react';
import { Router } from 'react-router-dom';
import { ThemeProvider, StyledEngineProvider } from '@mui/material';
import AdapterMoment from '@mui/lab/AdapterMoment'; // Change luxon
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { LoadingBar } from 'react-redux-loading-bar';

import { ModalRoot } from 'components';
import Auth from 'components/Auth';
import Notification from 'components/Notification';
import ScrollReset from 'components/ScrollReset';
import useSettings from 'hooks/useSettings';
import { createTheme } from 'theme';
import RootStyles from 'theme/RootStyles';
import Routes from 'Routes';
import history from 'store/history';
import './utils/axios';

const App = () => {
  const { settings } = useSettings();
  const theme = useMemo(() => createTheme(settings), [settings.theme]);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <RootStyles>
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
        </RootStyles>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
