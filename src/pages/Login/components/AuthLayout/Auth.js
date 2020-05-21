import React, {Fragment, Suspense, memo} from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/styles';
import {LinearProgress} from '@material-ui/core';
import TopBar from './TopBar';

const useStyles = makeStyles(theme => ({
  content: {
    height: '100%',
  },
}));

const Auth = ({children}) => {
  const classes = useStyles();

  return (
    <Fragment>
      <TopBar/>
      <main className={classes.content}>
        <Suspense fallback={<LinearProgress/>}>
          {children}
        </Suspense>
      </main>
    </Fragment>
  );
};

Auth.propTypes = {
  children: PropTypes.object.isRequired,
};

Auth.displayName = 'Auth';

export const story = Auth;
export default memo(Auth);
