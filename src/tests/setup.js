import { vi } from 'vitest'

import axios from 'axios'
import { API_HOST } from 'config'

axios.defaults.baseURL = API_HOST

global.structuredClone = vi.fn(val => {
  return JSON.parse(JSON.stringify(val))
})
