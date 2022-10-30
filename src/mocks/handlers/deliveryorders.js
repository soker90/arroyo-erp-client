import { rest } from 'msw'

import { API_HOST } from 'config'
import { API_DELIVERY_ORDERS_COUNT_FREE } from 'constants/paths'
import { deliveryOrdersCountFreeResponse } from '../apiResponses'

export const deliveryOrdersHandlers = [
  rest.get(`${API_HOST}/${API_DELIVERY_ORDERS_COUNT_FREE}/:year`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(deliveryOrdersCountFreeResponse())
    )
  })

]
