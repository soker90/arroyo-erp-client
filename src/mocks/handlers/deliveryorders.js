import { http, HttpResponse } from 'msw'

import { API_HOST } from 'config'
import { API_DELIVERY_ORDERS_COUNT_FREE } from 'constants/paths'
import { deliveryOrdersCountFreeResponse } from '../apiResponses'

export const deliveryOrdersHandlers = [
  http.get(`${API_HOST}/${API_DELIVERY_ORDERS_COUNT_FREE}/:year`, () => HttpResponse.json(deliveryOrdersCountFreeResponse()))
]
