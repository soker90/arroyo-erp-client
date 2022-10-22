import { afterAll, afterEach, beforeAll, vi } from 'vitest'
import { server } from '../mocks/server'

global.structuredClone = vi.fn(val => {
  return JSON.parse(JSON.stringify(val))
})

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
afterAll(() => server.close())
afterEach(() => server.resetHandlers())
