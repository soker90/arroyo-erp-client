import { http, HttpResponse } from 'msw'

import { API_HOST } from 'config'
import {
  API_CREATE_REMINDER,
  API_DASHBOARD,
  API_DELETE_REMINDER
} from 'constants/paths'
import {
  dashboardResponse,
  remindersResponse
} from '../apiResponses'

export const dashboardHandlers = [
  http.get(`${API_HOST}/${API_DASHBOARD}`, () => HttpResponse.json(dashboardResponse())),
  http.post(`${API_HOST}/${API_CREATE_REMINDER}`, ({ request }) => {
    const message = request.json()
      .then(({ message }) => message)

    return HttpResponse.json(remindersResponse(message))
  }),
  http.delete(`${API_HOST}/${API_DELETE_REMINDER}/:id`, () => HttpResponse.json(remindersResponse()))

]
