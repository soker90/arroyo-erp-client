import { memo } from 'react';
import PropTypes from 'prop-types';
import { Grid, LinearProgress } from '@mui/material';
import AuthLayout from './AuthLayout';
import LoginForm from './LoginForm';
import { useStyles } from './Login.styles';

const LoginView = ({ login, loginError, isLoading }) => {
  const classes = useStyles();

  /**
   * Render loading bar
   * @returns {boolean || LinearProgress}
   */
  const renderLoadingBar = () => isLoading && <LinearProgress />;

  return (
    <AuthLayout>
      <div className={classes.root}>
        <Grid
          className={classes.grid}
          container
        >
          <Grid
            className={classes.quoteContainer}
            item
            lg={5}
          >
            <div className={classes.quote} />
          </Grid>
          <Grid
            className={classes.content}
            item
            lg={7}
            xs={12}
          >
            <div className={classes.content}>
              <div className={classes.contentBody}>
                <LoginForm login={login} loginError={loginError} isLoading={isLoading} />
              </div>
              {renderLoadingBar()}
            </div>
          </Grid>
        </Grid>
      </div>
    </AuthLayout>
  );
};

LoginView.propTypes = {
  login: PropTypes.func.isRequired,
  loginError: PropTypes.string,
  isLoading: PropTypes.bool,
};

LoginView.displayName = 'LoginView';

export const story = LoginView;
export default memo(LoginView);
