import PropTypes from 'prop-types'
import { LinearProgress } from '@mui/material'

import GuestGuard from 'components/GuestGuard'
import { useAuth } from 'hooks'

import AuthLayout from './AuthLayout'
import LoginForm from './LoginForm'

const LoginView = () => {
  const { loginError, login, isLoading } = useAuth()

  /**
   * Render loading bar
   * @returns {JSX.Element}
   */
  const renderLoadingBar = () => isLoading && <LinearProgress />

  return (
    <GuestGuard>
      <AuthLayout>
        <div className='grid grid-cols-1 lg:grid-cols-12 h-full bg-background'>
          <div className='hidden lg:block lg:col-span-5'>
            <div className='h-full bg-[url("/static/images/auth.png")] bg-cover bg-center' />
          </div>
          <div className='lg:col-span-7 col-span-1'>
            <div className='h-full flex'>
              <div className='flex flex-grow items-center'>
                <LoginForm login={login} loginError={loginError} isLoading={isLoading} />
              </div>
              <div className='text-center'>
                {renderLoadingBar()}
              </div>
            </div>
          </div>
        </div>
      </AuthLayout>
    </GuestGuard>
  )
}

LoginView.propTypes = {
  login: PropTypes.func.isRequired,
  loginError: PropTypes.string,
  isLoading: PropTypes.bool
}

LoginView.displayName = ' LoginView'

export const story = LoginView
export default LoginView
