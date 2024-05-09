import { useContext } from 'react'
import AuthContext from 'contexts/AuthProvider'

export const useAuth = () => {
  const context = useContext(AuthContext)

  return context
}
