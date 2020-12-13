import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  makeStyles,
  SvgIcon,
} from '@material-ui/core';
import { Menu as MenuIcon } from 'react-feather';

import Logo from 'components/Logo';
import { THEMES } from 'constants/common';
import Account from './Account';
import PricesNotification from './PricesNotification';
import Search from './Search';
import Settings from './Settings';

const useStyles = makeStyles(theme => ({
  root: {
    zIndex: theme.zIndex.drawer + 100,
    ...(theme.name === THEMES.LIGHT ? {
      boxShadow: 'none',
      backgroundColor: theme.palette.primary.main,
    } : {}),
    ...(theme.name === THEMES.ONE_DARK ? {
      backgroundColor: theme.palette.background.default,
    } : {}),
  },
  toolbar: {
    minHeight: 64,
  },
}));

function TopBar({
  className,
  onMobileNavOpen,
  ...rest
}) {
  const classes = useStyles();

  return (
    <AppBar
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Toolbar className={classes.toolbar}>
        <Hidden lgUp>
          <IconButton
            className={classes.menuButton}
            color='inherit'
            onClick={onMobileNavOpen}
          >
            <SvgIcon fontSize='small'>
              <MenuIcon />
            </SvgIcon>
          </IconButton>
        </Hidden>
        <Hidden mdDown>
          <RouterLink to='/'>
            <Logo />
          </RouterLink>
        </Hidden>
        <Box
          ml={2}
          flexGrow={1}
        />
        <Search />
        <PricesNotification />
        <Settings />
        <Box ml={2}>
          <Account />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func,
};

export default TopBar;
