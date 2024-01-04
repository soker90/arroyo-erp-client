import { http, HttpResponse } from 'msw'

import { API_HOST } from 'config'
import { API_BILLINGS } from 'constants/paths'
import { billingsResponse } from '../apiResponses'

export const billingsHandlers = [
  http.get(`${API_HOST}/${API_BILLINGS}`, () => HttpResponse.json(billingsResponse()))
]
