import { faker } from '@faker-js/faker'
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

export const clientsResponse = () => rangeFill(faker.datatype.number({
  max: 40,
  min: 2
}), generateClient)

export const CREATE_CLIENT_NO_NAME_ERROR = {
  statusCode: 400,
  error: 'Bad Request',
  message: 'El nombre es obligatorio'
}
