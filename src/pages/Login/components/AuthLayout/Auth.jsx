import { Suspense, memo } from 'react'
import PropTypes from 'prop-types'
import { LinearProgress } from '@mui/material'
import TopBar from './TopBar'

const Auth = ({ children }) => (
  <>
    <TopBar />
    <main className='h-full'>

      <Suspense fallback={<LinearProgress />}>
        {children}
      </Suspense>
    </main>
  </>
)

Auth.propTypes = {
  children: PropTypes.object.isRequired
}

Auth.displayName = 'Auth'

export const story = Auth
export default memo(Auth)
