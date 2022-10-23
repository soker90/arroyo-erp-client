import { rest } from 'msw'

import { API_HOST } from 'config'
import { clientsResponse } from '../apiResponses'

export const clientsHandlers = [
  rest.get(`${API_HOST}/clients`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(clientsResponse())
    )
  })
]
