import { useRef, useState } from 'react'
import {
  Avatar, Box, ButtonBase, Hidden, Menu, MenuItem, Typography
} from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'

import { useAuth } from 'hooks'

const useStyles = makeStyles(theme => ({
  avatar: {
    height: 32,
    width: 32,
    marginRight: theme.spacing(1)
  },
  popover: {
    width: 200
  }
}))

const Account = () => {
  const classes = useStyles()
  const ref = useRef(null)
  const { user, logout } = useAuth()
  const [isOpen, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleLogout = () => {
    handleClose()
    logout()
  }

  return (
    <>
      <Box
        display='flex'
        alignItems='center'
        component={ButtonBase}
        onClick={handleOpen}
        ref={ref}
      >
        <Avatar
          alt='User'
          className={classes.avatar}
          src={null}
        />
        <Hidden mdDown>
          <Typography
            variant='h6'
            color='inherit'
          >
            {user}
          </Typography>
        </Hidden>
      </Box>
      <Menu
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        keepMounted
        slotProps={{ paper: { className: classes.popover } }}
        anchorEl={ref.current}
        open={isOpen}
      >
        <MenuItem onClick={handleLogout}>
          Salir
        </MenuItem>
      </Menu>
    </>
  )
}

export default Account
