import { useEffect } from 'react';
import NProgress from 'nprogress';
import { Box, LinearProgress } from '@material-ui/core';

import { useStyles } from './LoadingScreen.style';

function LoadingScreen() {
  const classes = useStyles();

  useEffect(() => {
    NProgress.start();

    return () => {
      NProgress.done();
    };
  }, []);

  return (
    <div className={classes.root}>
      <Box width={400}>
        <LinearProgress />
      </Box>
    </div>
  );
}

export default LoadingScreen;
