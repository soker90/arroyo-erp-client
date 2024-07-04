import { Suspense, memo } from 'react'
import PropTypes from 'prop-types'

import { LoadingBar } from 'components'
import TopBar from './TopBar'

const Auth = ({ children }) => (
  <div className='flex flex-col h-screen'>
    <TopBar />
    <main className='flex-1'>
      <Suspense fallback={<LoadingBar />}>
        {children}
      </Suspense>
    </main>
  </div>
)

Auth.propTypes = {
  children: PropTypes.object.isRequired
}

Auth.displayName = 'Auth'

export const story = Auth
export default memo(Auth)
