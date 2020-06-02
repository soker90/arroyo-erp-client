/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo } from 'react';
import { Router } from 'react-router-dom';
import MomentUtils from '@date-io/moment';
import { createStyles, makeStyles, ThemeProvider } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
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

const useStyles = makeStyles(() => createStyles({
  '@global': {
    '*': {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
    },
    html: {
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
      height: '100%',
      width: '100%',
    },
    body: {
      height: '100%',
      width: '100%',
    },
    '#root': {
      height: '100%',
      width: '100%',
    },
  },
}));

function App() {
  useStyles();

  const { settings } = useSettings();
  const theme = useMemo(() => createTheme(settings), [settings.theme]);

  return (
    <ThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
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
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
}

export default App;
