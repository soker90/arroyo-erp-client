import { afterAll, afterEach, beforeAll, vi } from 'vitest'
import { server } from '../mocks/server'
import axios from 'axios'
import { API_HOST } from 'config'

axios.defaults.baseURL = API_HOST

global.structuredClone = vi.fn(val => {
  return JSON.parse(JSON.stringify(val))
})

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
afterAll(() => server.close())
afterEach(() => server.resetHandlers())
