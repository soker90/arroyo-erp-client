import jwtDecode from 'jwt-decode';
import axios from 'axios';
import {ARROYO_TOKEN} from 'config';

class AuthService {
  setAxiosInterceptors = ({onLogout}) => {
    axios.interceptors.response.use(
      response => response,
      error => {
        if (error.response && error.response.status === 401) {
          this.setSession(null);

          if (onLogout) {
            onLogout();
          }
        }

        return Promise.reject(error);
      }
    );
  };

  handleAuthentication() {
    const accessToken = this.getAccessToken();

    if (!accessToken) {
      return;
    }

    if (this.isValidToken(accessToken)) {
      this.setSession(accessToken);
    } else {
      this.setSession(null);
    }
  }

  loginWithUsernameAndPassword = (username, password) => new Promise((resolve, reject) => {
    axios.post('/account/login', {username, password})
      .then(({data}) => {
        if (data.token) {
          this.setSession(data.token);
          resolve(jwtDecode(data.token).user);
        } else {
          reject(data.error);
        }
      })
      .catch(error => {
        reject(error);
      });
  })

  loginInWithToken = () => new Promise((resolve, reject) => {
    axios.get('/account/me')
      .then(({headers}) => {
        if (headers.token) {
          this.setSession(headers.token);
          resolve(jwtDecode(headers.token).user);
        } else {
          reject();
        }
      })
      .catch(error => {
        reject(error);
      });
  })

  logout = () => {
    this.setSession(null);
  }

  setSession = accessToken => {
    if (accessToken) {
      localStorage.setItem(ARROYO_TOKEN, accessToken);
      axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    } else {
      localStorage.removeItem(ARROYO_TOKEN);
      delete axios.defaults.headers.common.Authorization;
    }
  }

  getAccessToken = () => localStorage.getItem(ARROYO_TOKEN);

  isValidToken = accessToken => {
    if (!accessToken) {
      return false;
    }

    const decoded = jwtDecode(accessToken);
    const currentTime = Date.now() / 1000;

    return decoded.exp > currentTime;
  }

  isAuthenticated = () => !!this.getAccessToken()
}

const authService = new AuthService();

export default authService;
