/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import AuthGuard from 'components/AuthGuard';
import NavBar from './NavBar';
import TopBar from './TopBar';
import { useStyles } from './DashBoardLayout.styles';

const DashboardLayout = () => {
  const classes = useStyles();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <AuthGuard>
      <div className={classes.root}>
        <TopBar onMobileNavOpen={() => setMobileNavOpen(true)} />
        <NavBar
          onMobileClose={() => setMobileNavOpen(false)}
          openMobile={isMobileNavOpen}
        />
        <div className={classes.wrapper}>
          <div className={classes.contentContainer}>
            <div className={classes.content}>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </AuthGuard>
  );
};

export default DashboardLayout;
