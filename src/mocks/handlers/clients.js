import { http, HttpResponse } from 'msw'

import { API_HOST } from 'config'
import { clientsResponse, CREATE_CLIENT_NO_NAME_ERROR, clientResponse } from '../apiResponses'

export const clientsHandlers = [
  http.get(`${API_HOST}/clients`, () => HttpResponse.json(clientsResponse())),
  http.post(`${API_HOST}/clients`, ({ request }) => {
    return request.json()
      .then(({ name }) => {
        if (!name) {
          return new HttpResponse(CREATE_CLIENT_NO_NAME_ERROR, { status: 400 }
          )
        }
        return new HttpResponse(null, { status: 201 })
      })
  }),
  http.get(`${API_HOST}/clients/:id`, () => HttpResponse.json(clientResponse()))
]
