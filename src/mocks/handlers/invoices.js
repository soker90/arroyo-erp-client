import { http, HttpResponse } from 'msw'

import { API_HOST } from 'config'
import { API_INVOICES } from 'constants/paths'
import { invoicesResponse } from '../apiResponses'

export const invoicesHandlers = [
  http.get(`${API_HOST}/${API_INVOICES}`, () => HttpResponse.json(invoicesResponse()))
]
