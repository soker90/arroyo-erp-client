import { useRef, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Avatar, Box, ButtonBase, Hidden, Menu, MenuItem, Typography,
} from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { logout } from 'actions/auth';

const useStyles = makeStyles()(theme => ({
  avatar: {
    height: 32,
    width: 32,
    marginRight: theme.spacing(1),
  },
  popover: {
    width: 200,
  },
}));

const Account = () => {
  const classes = useStyles();
  const ref = useRef(null);
  const dispatch = useDispatch();
  const account = useSelector(state => state.account);
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    handleClose();
    dispatch(logout());
  };

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
            {account.user}
          </Typography>
        </Hidden>
      </Box>
      <Menu
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        keepMounted
        PaperProps={{ className: classes.popover }}
        anchorEl={ref.current}
        open={isOpen}
      >
        <MenuItem
          component={RouterLink}
          to='/app/social/profile'
        >
          Perfil
        </MenuItem>
        <MenuItem
          component={RouterLink}
          to='/app/account'
        >
          Cuenta
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          Salir
        </MenuItem>
      </Menu>
    </>
  );
};

export default Account;
