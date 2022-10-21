import { ThemeProvider, StyledEngineProvider } from '@mui/material';
import { createTheme } from 'theme';
import { THEMES } from '../constants/common';

/**
 * Theme wrapper for storybook
 * @param children
 * @param {string} theme
 * @return {ThemeProvider}
 * @constructor
 */

const ThemeWrapper = ({ children }) => {
  const theme = THEMES.LIGHT;

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={createTheme({ theme })}>
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

ThemeWrapper.displayName = 'ThemeWrapper';

export default ThemeWrapper;
