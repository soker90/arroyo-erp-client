import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import SplashScreen from 'components/SplashScreen'
import { useAuth } from 'hooks'
import authService from 'services/authService'

const Auth = ({ children }) => {
  const [isLoading, setLoading] = useState(true)
  const { logout, setUserData } = useAuth()

  useEffect(() => {
    const initAuth = async () => {
      authService.setAxiosInterceptors({
        onLogout: logout
      })

      authService.handleAuthentication()

      if (authService.isAuthenticated()) {
        const user = await authService.loginInWithToken()
        setUserData(user)
      }

      setLoading(false)
    }

    initAuth()
  }, [])

  if (isLoading) return <SplashScreen />

  return children
}

Auth.propTypes = {
  children: PropTypes.any
}

export default Auth
