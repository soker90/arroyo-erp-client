/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import { colors, createTheme as createMuiTheme, responsiveFontSizes } from '@material-ui/core';
import { THEMES } from 'constants/common';
import typography from './typography';
import { softShadows, strongShadows } from './shadows';

const baseConfig = {
  direction: 'ltr',
  responsiveFontSizes: true,
  typography,
  overrides: {
    MuiLinearProgress: {
      root: {
        borderRadius: 3,
        overflow: 'hidden',
      },
    },
    MuiListItemIcon: {
      root: {
        minWidth: 32,
      },
    },
    MuiChip: {
      root: {
        backgroundColor: 'rgba(0,0,0,0.075)',
      },
    },
  },
};

const themeConfigs = [
  {
    name: THEMES.LIGHT,
    overrides: {
      MuiInputBase: {
        input: {
          '&::placeholder': {
            opacity: 1,
            color: colors.blueGrey[600],
          },
        },
      },
    },
    palette: {
      type: 'light',
      action: {
        active: colors.blueGrey[600],
      },
      background: {
        default: colors.common.white,
        dark: '#f4f6f8',
        paper: colors.common.white,
      },
      primary: {
        main: colors.indigo[600],
      },
      secondary: {
        main: '#5850EC',
      },
      text: {
        primary: colors.blueGrey[900],
        secondary: colors.blueGrey[600],
      },
    },
    shadows: softShadows,
  },
  {
    name: THEMES.ONE_DARK,
    palette: {
      type: 'dark',
      action: {
        active: 'rgba(255, 255, 255, 0.54)',
        hover: 'rgba(255, 255, 255, 0.04)',
        selected: 'rgba(255, 255, 255, 0.08)',
        disabled: 'rgba(255, 255, 255, 0.26)',
        disabledBackground: 'rgba(255, 255, 255, 0.12)',
        focus: 'rgba(255,255,255,0.12)',
      },
      background: {
        default: '#282C34',
        dark: '#1c2025',
        paper: '#282C34',
      },
      primary: {
        main: '#8a85ff',
      },
      secondary: {
        main: '#8a85ff',
      },
      text: {
        primary: '#e6e5e8',
        secondary: '#adb0bb',
        error: colors.red[600],
      },
    },
    shadows: strongShadows,
  },
  {
    name: THEMES.UNICORN,
    palette: {
      type: 'dark',
      action: {
        active: 'rgba(255, 255, 255, 0.54)',
        hover: 'rgba(255, 255, 255, 0.04)',
        selected: 'rgba(255, 255, 255, 0.08)',
        disabled: 'rgba(255, 255, 255, 0.26)',
        disabledBackground: 'rgba(255, 255, 255, 0.12)',
        focus: 'rgba(255, 255, 255, 0.12)',
      },
      background: {
        default: '#2a2d3d',
        dark: '#222431',
        paper: '#2a2d3d',
      },
      primary: {
        main: '#a67dff',
      },
      secondary: {
        main: '#a67dff',
      },
      text: {
        primary: '#f6f5f8',
        secondary: '#9699a4',
      },
    },
    shadows: strongShadows,
  },
];

export function createTheme(settings = {}) {
  let themeConfig = themeConfigs.find(theme => theme.name === settings.theme);

  if (!themeConfig) {
    console.warn(new Error(`The theme ${settings.theme} is not valid`));
    [themeConfig] = themeConfigs;
  }

  let theme = createMuiTheme({
    ...baseConfig,
    ...themeConfig,
  });

  if (settings.responsiveFontSizes) theme = responsiveFontSizes(theme);

  return theme;
}
