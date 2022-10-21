import clsx from 'clsx'
import PropTypes from 'prop-types'
import { AppBar, Toolbar } from '@mui/material'

import { useStyles } from './TopBar.styles'

const TopBar = ({ className }) => {
  const classes = useStyles()
  return (
    <AppBar
      className={clsx(classes.root, className)}
      color='primary'
    >
      <Toolbar>
        <img
          alt='Logo'
          src='/static/logo.png'
          height='45rem'
          width='100rem'
        />
      </Toolbar>
    </AppBar>
  )
}

TopBar.propTypes = {
  className: PropTypes.string
}

TopBar.displayName = 'TopBar'

export const story = TopBar
export default TopBar
