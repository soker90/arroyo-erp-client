import { Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'

import { useAuth } from 'hooks'

const GuestGuard = ({ children }) => {
  const { user } = useAuth()

  if (user) return <Navigate to='/app' replace />

  return children
}

GuestGuard.propTypes = {
  children: PropTypes.any
}

export default GuestGuard
