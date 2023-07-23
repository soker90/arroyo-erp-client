import { Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useAuth } from 'hooks'

const AuthGuard = ({ children }) => {
  const { user } = useAuth()

  if (!user) return <Navigate to='/login' replace />

  return children
}

AuthGuard.propTypes = {
  children: PropTypes.any
}

export default AuthGuard
