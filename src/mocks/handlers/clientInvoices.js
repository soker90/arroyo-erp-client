import { rest } from 'msw'

import { API_HOST } from 'config'
import { PATH_CLIENT_BILLING, API_CLIENT_INVOICES } from 'constants/paths'
import { clientBillingsResponse, clientInvoicesResponse } from '../apiResponses'

export const clientInvoicesHandlers = [
  rest.get(`${API_HOST}/${PATH_CLIENT_BILLING}`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(clientBillingsResponse())
    )
  }),
  rest.get(`${API_HOST}/${API_CLIENT_INVOICES}`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(clientInvoicesResponse())
    )
  })
]
