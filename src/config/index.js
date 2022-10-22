// or get from import.meta.env.VITE_{var} to handle PROD and DEV environments
export const APP_VERSION = window.__VERSION__
export const API_HOST = import.meta.env.VITE_API_HOST
export const API_BASE_URL = '/api'
export const ENABLE_REDUX_LOGGER = false
export const ARROYO_TOKEN = 'ARROYO_TOKEN'

export default {}
