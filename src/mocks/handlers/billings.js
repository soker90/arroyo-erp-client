import { rest } from 'msw'

import { API_HOST } from 'config'
import { API_BILLINGS } from 'constants/paths'
import { billingsResponse } from '../apiResponses'

export const billingsHandlers = [
  rest.get(`${API_HOST}/${API_BILLINGS}`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(billingsResponse())
    )
  })

]
