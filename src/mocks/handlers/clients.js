import { rest } from 'msw'
import { faker } from '@faker-js/faker'

import { API_HOST } from 'config'
import { rangeFill } from 'utils'

const generateClient = () => ({
  _id: faker.database.mongodbObjectId(),
  name: faker.company.name().toLowerCase(),
  invoices: faker.datatype.number({
    min: 0,
    max: 100
  }),
  pending: faker.datatype.number({
    min: 0,
    max: 100
  })
})

export const clientsHandlers = [
  rest.get(`${API_HOST}/clients`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(rangeFill(faker.datatype.number({
        max: 40,
        min: 2
      }), generateClient))
    )
  })
]
