import { rest } from 'msw'

import { API_HOST } from 'config'
import {
  API_CREATE_REMINDER,
  API_DASHBOARD,
  API_DELETE_REMINDER
} from 'constants/paths'
import {
  dashboardResponse,
  remindersResponse
} from '../apiResponses'

export const dashboardHandlers = [
  rest.get(`${API_HOST}/${API_DASHBOARD}`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(dashboardResponse())
    )
  }),
  rest.post(`${API_HOST}/${API_CREATE_REMINDER}`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(remindersResponse(req.json().message))
    )
  }),
  rest.delete(`${API_HOST}/${API_DELETE_REMINDER}/:id`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(remindersResponse())
    )
  })
]
