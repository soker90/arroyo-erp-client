/* eslint-disable */
import { ThemeProvider, StyledEngineProvider, adaptV4Theme } from '@mui/material';
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
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={createTheme(adaptV4Theme({ theme }))}>
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

ThemeWrapper.displayName = 'ThemeWrapper';

export default ThemeWrapper;
