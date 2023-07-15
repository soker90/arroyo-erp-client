import { useMemo, Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider, StyledEngineProvider } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LoadingBar } from 'react-redux-loading-bar'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { NotificationsProvider } from 'contexts/NotificationsProvider'

import Auth from 'components/Auth'
import NotificationLegacy from 'components/Notification'
import Notification from 'components/Notification/components/Notification'
import ScrollReset from 'components/ScrollReset'
import useSettings from 'hooks/useSettings'
import { createTheme } from 'theme'
import RootStyles from 'theme/RootStyles'
import Routes from './Routes'
import './utils/axios'
import LoadingScreen from 'components/LoadingScreen'

const App = () => {
  const { settings } = useSettings()
  const theme = useMemo(() => createTheme(settings), [settings.theme])

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <RootStyles>
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='es'>
            <NotificationsProvider>
              <Suspense fallback={<LoadingScreen />}>
                <BrowserRouter>
                  <LoadingBar
                    style={{
                      zIndex: 999999,
                      backgroundColor: theme.palette.secondary.main,
                      height: '5px'
                    }}
                  />
                  <Notification />
                  <NotificationLegacy />
                  <Auth>
                    <ScrollReset />
                    <Routes />
                  </Auth>
                </BrowserRouter>
              </Suspense>
            </NotificationsProvider>
          </LocalizationProvider>
        </RootStyles>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default App
