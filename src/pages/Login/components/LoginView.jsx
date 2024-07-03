import PropTypes from 'prop-types'
import { Grid, LinearProgress } from '@mui/material'

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
        <div className='h-full bg-background'>
          <Grid
            className='h-full'
            container
          >
            <Grid
              className='hidden lg:block'
              item
              lg={5}
            >
              <div className='h-full bg-[url("/static/images/auth.png")] bg-cover bg-center' />
            </Grid>
            <Grid
              item
              lg={7}
              xs={12}
            >
              <div className='h-full flex'>
                <div className='flex flex-grow items-center'>
                  <LoginForm login={login} loginError={loginError} isLoading={isLoading} />
                </div>
                {renderLoadingBar()}
              </div>
            </Grid>
          </Grid>
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
