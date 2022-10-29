import { rest } from 'msw'

import { API_HOST } from 'config'
import { API_INVOICES } from 'constants/paths'
import { invoicesResponse } from '../apiResponses'

export const invoicesHandlers = [
  rest.get(`${API_HOST}/${API_INVOICES}`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(invoicesResponse())
    )
  })
]
