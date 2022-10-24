import { rest } from 'msw'

import { API_HOST } from 'config'
import { clientsResponse, CREATE_CLIENT_NO_NAME_ERROR } from '../apiResponses'

export const clientsHandlers = [
  rest.get(`${API_HOST}/clients`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(clientsResponse())
    )
  }),
  rest.post(`${API_HOST}/clients`, (req, res, ctx) => {
    return req.json().then(({ name }) => {
      if (!name) {
        return res(
          ctx.status(400),
          ctx.json(CREATE_CLIENT_NO_NAME_ERROR)
        )
      }
      return res(
        ctx.status(201)
      )
    })
  })
]
