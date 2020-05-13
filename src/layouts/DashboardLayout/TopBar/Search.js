import React, {useRef, useState} from 'react';
import {
  ClickAwayListener,
  colors,
  Hidden,
  Input,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Paper,
  Popper,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import {useSelector} from "react-redux";

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none',
  },
  flexGrow: {
    flexGrow: 1,
  },
  search: {
    backgroundColor: 'rgba(255,255,255, 0.1)',
    borderRadius: 4,
    flexBasis: 300,
    height: 36,
    padding: theme.spacing(0, 2),
    display: 'flex',
    alignItems: 'center',
  },
  searchIcon: {
    marginRight: theme.spacing(2),
    color: 'inherit',
  },
  searchInput: {
    flexGrow: 1,
    color: 'inherit',
    '& input::placeholder': {
      opacity: 1,
      color: 'inherit',
    },
  },
  searchPopper: {
    zIndex: theme.zIndex.appBar + 100,
  },
  searchPopperContent: {
    marginTop: theme.spacing(1),
  },
  trialButton: {
    marginLeft: theme.spacing(2),
    color: theme.palette.common.white,
    backgroundColor: colors.green[600],
    '&:hover': {
      backgroundColor: colors.green[900],
    },
  },
  trialIcon: {
    marginRight: theme.spacing(1),
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  chatButton: {
    marginLeft: theme.spacing(1),
  },
  notificationsButton: {
    marginLeft: theme.spacing(1),
  },
  notificationsBadge: {
    backgroundColor: colors.orange[600],
  },
  logoutButton: {
    marginLeft: theme.spacing(1),
  },
  logoutIcon: {
    marginRight: theme.spacing(1),
  },
}));

function Search() {
  const classes = useStyles();
  const searchRef = useRef(null);
  const [openSearchPopover, setOpenSearchPopover] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const providers = useSelector(({providers}) => providers.providers);

  const handleSearchChange = event => {
    setSearchValue(event.target.value);

    if (event.target.value) {
      if (!openSearchPopover) {
        setOpenSearchPopover(true);
      }
    } else {
      setOpenSearchPopover(false);
    }
  };

  const handleSearchPopverClose = () => {
    setOpenSearchPopover(false);
  };

  return (
    <>
      <Hidden smDown>
        <div
          className={classes.search}
          ref={searchRef}
        >
          <SearchIcon className={classes.searchIcon}/>
          <Input
            className={classes.searchInput}
            disableUnderline
            onChange={handleSearchChange}
            placeholder="Search people &amp; places"
            value={searchValue}
          />
        </div>
        <Popper
          anchorEl={searchRef.current}
          className={classes.searchPopper}
          open={openSearchPopover}
          transition
        >
          <ClickAwayListener onClickAway={handleSearchPopverClose}>
            <Paper
              className={classes.searchPopperContent}
              elevation={3}
            >
              <List>
                {providers.map(search => (
                  <ListItem
                    button
                    key={search._id}
                    onClick={handleSearchPopverClose}
                  >
                    <ListItemIcon>
                      <SearchIcon/>
                    </ListItemIcon>
                    <ListItemText primary={search.name}/>
                  </ListItem>
                ))}
              </List>
            </Paper>
          </ClickAwayListener>
        </Popper>
      </Hidden>
    </>
  );
}

export default Search;
