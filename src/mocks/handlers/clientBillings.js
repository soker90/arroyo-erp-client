import { rest } from 'msw'

import { API_HOST } from 'config'
import { PATH_CLIENT_BILLING } from 'constants/paths'
import { clientBillingsResponse } from '../apiResponses'

export const clientBillingsHandlers = [
  rest.get(`${API_HOST}/${PATH_CLIENT_BILLING}`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(clientBillingsResponse())
    )
  })

]
