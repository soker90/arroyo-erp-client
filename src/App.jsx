import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { NotificationsProvider } from 'contexts/NotificationsProvider'
import { AuthProvider } from 'contexts/AuthProvider'

import Auth from 'components/Auth'
import Notification from 'components/Notification'
import ScrollReset from 'components/ScrollReset'
import { TooltipProvider } from 'components'
import useSettings from 'hooks/useSettings'
import Routes from './Routes'
import './utils/axios'
import LoadingScreen from 'components/LoadingScreen'
import { cn } from './utils'

const App = () => {
  const { settings } = useSettings()

  const themeMode = settings.theme === 'LIGHT' ? 'light' : 'dark'

  return (
    <div className={cn(themeMode, 'h-screen')}>
      <NotificationsProvider>
        <TooltipProvider>
          <Suspense fallback={<LoadingScreen />}>
            <BrowserRouter>
              <AuthProvider>
                <Notification />
                <Auth>
                  <ScrollReset />
                  <Routes />
                </Auth>
              </AuthProvider>
            </BrowserRouter>
          </Suspense>
        </TooltipProvider>
      </NotificationsProvider>
    </div>
  )
}

export default App
