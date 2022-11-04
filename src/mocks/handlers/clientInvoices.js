import { rest } from 'msw'

import { API_HOST } from 'config'
import {
  PATH_CLIENT_BILLING,
  API_CLIENT_INVOICES,
  API_CLIENT_INVOICES_SHORT
} from 'constants/paths'
import {
  clientBillingsResponse,
  clientInvoicesResponse,
  clientInvoicesShortResponse
} from '../apiResponses'

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
  }),
  rest.get(`${API_HOST}/${API_CLIENT_INVOICES_SHORT}`, (req, res, ctx) => {
    const offset = req.url.searchParams.get('offset') || 0
    const limit = req.url.searchParams.get('limit') || 10
    return res(
      ctx.status(200),
      ctx.json(clientInvoicesShortResponse({ offset, limit }))
    )
  })
]
