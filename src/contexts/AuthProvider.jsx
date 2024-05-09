import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

import authService from 'services/authService'
import { useNavigate } from 'react-router'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [loginError, setLoginError] = useState(undefined)
  const navigate = useNavigate()

  /**
   * @param {string} username
   * @param {string} password
   */
  const login = async (username, password) => {
    setIsLoading(true)
    try {
      const loginUser = await authService.loginWithUsernameAndPassword(
        username,
        password
      )

      if (setLoginError) setLoginError(undefined)
      setUser(loginUser)
    } catch (error) {
      console.error(error)
      setLoginError(error?.response?.data?.message)
    }

    setIsLoading(false)
  }

  const logout = async () => {
    await authService.logout()
    setUser(null)
    navigate('/')
  }

  const setUserData = (username) => {
    setUser(username)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        setUserData,
        loginError,
        isLoading
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default AuthContext
