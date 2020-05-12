import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';

import NavBar from './NavBar';
import TopBar from './TopBar';
import {initialize} from 'actions/initializeAction';
import {useStyles} from './DashBoardLayout.styles';

const DashboardLayout = ({ children }) => {
  const classes = useStyles();
  const dispatch = useDispatch()
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    dispatch(initialize());
  },[]);

  return (
    <div className={classes.root}>
      <TopBar onMobileNavOpen={() => setMobileNavOpen(true)} />
      <NavBar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
      />
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.any
};

export default DashboardLayout;
