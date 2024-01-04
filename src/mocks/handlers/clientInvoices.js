import { http, HttpResponse } from 'msw'

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
  http.get(`${API_HOST}/${PATH_CLIENT_BILLING}`, () => HttpResponse.json(clientBillingsResponse())),
  http.get(`${API_HOST}/${API_CLIENT_INVOICES}`, () => HttpResponse.json(clientInvoicesResponse())),

  http.get(`${API_HOST}/${API_CLIENT_INVOICES_SHORT}`, ({ request }) => {
    const url = new URL(request.url)
    const offset = url.searchParams.get('offset') || 0
    const limit = url.searchParams.get('limit') || 10
    return HttpResponse.json(
      clientInvoicesShortResponse({
        offset,
        limit
      })
    )
  })
]
