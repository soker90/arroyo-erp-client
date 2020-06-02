import axios from 'axios';
import { ARROYO_TOKEN } from 'config';

const { REACT_APP_API_HOST } = process.env;

// ========================================================
// Axios config
// ========================================================
axios.defaults.baseURL = REACT_APP_API_HOST;
axios.interceptors.response.use(
  response => {
    const { token } = response.headers;
    localStorage.setItem(ARROYO_TOKEN, token);
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    return response;
  },
);
