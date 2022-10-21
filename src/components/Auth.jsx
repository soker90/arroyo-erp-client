import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import PropTypes from 'prop-types';
import SplashScreen from 'components/SplashScreen';
import { setUserData, logout } from 'actions/auth';
import authService from 'services/authService';
import { initialize } from 'actions/initializeAction';

const Auth = ({ children }) => {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const initAuth = async () => {
      authService.setAxiosInterceptors({
        onLogout: () => dispatch(logout(navigate)),
      });

      authService.handleAuthentication();

      if (authService.isAuthenticated()) {
        const user = await authService.loginInWithToken();
        await dispatch(setUserData(user));
        dispatch(initialize());
      }

      setLoading(false);
    };

    initAuth();
  }, [dispatch]);

  if (isLoading) return <SplashScreen />;

  return children;
};

Auth.propTypes = {
  children: PropTypes.any,
};

export default Auth;
