import { fakerES as faker } from '@faker-js/faker'
import { rangeFill } from 'utils'

const generateClient = () => ({
  _id: faker.database.mongodbObjectId(),
  name: faker.company.name()
    .toLowerCase(),
  invoices: faker.number.int({
    min: 0,
    max: 100
  }),
  pending: faker.number.int({
    min: 0,
    max: 100
  })
})

export const clientsResponse = () => rangeFill(faker.number.int({
  max: 40,
  min: 2
}), generateClient)

export const CREATE_CLIENT_NO_NAME_ERROR = {
  statusCode: 400,
  error: 'Bad Request',
  message: 'El nombre es obligatorio'
}

export const clientResponse = () => ({
  _id: faker.database.mongodbObjectId(),
  name: faker.company.buzzVerb(),
  address: `${faker.location.street()}, ${faker.location.buildingNumber()}`,
  city: faker.location.city(),
  postalCode: faker.location.zipCode(),
  province: faker.location.state(),
  phone: faker.phone.number('6########'),
  email: faker.internet.email(),
  businessName: faker.company.name(),
  cif: `${faker.lorem.word({ strategy: 'shortest' })}${faker.number.int({ min: 10000000, max: 99999999 })}`
})
