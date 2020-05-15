import React from 'react';
import {Router} from 'react-router-dom';
import MomentUtils from '@date-io/moment';
import {createStyles, makeStyles, ThemeProvider} from '@material-ui/core';
import {MuiPickersUtilsProvider} from '@material-ui/pickers';

import Auth from 'components/Auth';
import ScrollReset from 'components/ScrollReset';
import useSettings from 'hooks/useSettings';
import {createTheme} from 'theme';
import Routes from 'Routes';
import history from 'store/history';
import {ModalRoot} from 'components';
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

  const {settings} = useSettings();

  return (
    <ThemeProvider theme={createTheme(settings)}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <Router history={history}>
          <Auth>
            <ScrollReset/>
            <Routes/>
            <ModalRoot/>
          </Auth>
        </Router>
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
}

export default App;
