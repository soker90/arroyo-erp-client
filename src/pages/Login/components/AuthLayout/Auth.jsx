import { Suspense, memo } from 'react'
import PropTypes from 'prop-types'
import makeStyles from '@mui/styles/makeStyles'
import { LinearProgress } from '@mui/material'
import TopBar from './TopBar'

const useStyles = makeStyles(() => ({
  content: {
    height: '100%'
  }
}))

const Auth = ({ children }) => {
  const classes = useStyles()

  return (
    <>
      <TopBar />
      <main className={classes.content}>
        <Suspense fallback={<LinearProgress />}>
          {children}
        </Suspense>
      </main>
    </>
  )
}

Auth.propTypes = {
  children: PropTypes.object.isRequired
}

Auth.displayName = 'Auth'

export const story = Auth
export default memo(Auth)
