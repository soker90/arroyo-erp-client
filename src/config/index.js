import { version } from '../../package.json'
// or get from import.meta.env.VITE_{var} to handle PROD and DEV environments
export const APP_VERSION = version
export const API_HOST = import.meta.env.VITE_API_HOST
export const API_BASE_URL = '/api'
export const ARROYO_TOKEN = 'ARROYO_TOKEN'

export default {}
