/* eslint-disable */
import { ThemeProvider } from '@mui/material';
import { createTheme } from 'theme';
import { select } from '@storybook/addon-knobs';
import { THEMES } from '../constants/common';

/**
 * Theme wrapper for storybook
 * @param children
 * @param {string} theme
 * @return {ThemeProvider}
 * @constructor
 */

const ThemeWrapper = ({ children }) => {
  const theme = select(
    'Tema',
    Object.keys(THEMES),
    THEMES.LIGHT,
    'General',
  );

  return (
    <ThemeProvider theme={createTheme({ theme })}>
      {children}
    </ThemeProvider>
  );
};

ThemeWrapper.displayName = 'ThemeWrapper';

export default ThemeWrapper;
