import { fakerES as faker } from '@faker-js/faker'
import { rangeFill } from 'utils'

const generateDeliverOrderCount = () => ({
  provider: faker.database.mongodbObjectId(),
  name: faker.company.name(),
  total: faker.number.int({
    min: 0,
    max: 400
  }),
  1: faker.number.int({
    min: 0,
    max: 100
  }),
  2: faker.number.int({
    min: 0,
    max: 100
  }),
  3: faker.number.int({
    min: 0,
    max: 100
  }),
  4: faker.number.int({
    min: 0,
    max: 100
  })
})

export const deliveryOrdersCountFreeResponse = () => rangeFill(faker.number.int({
  max: 40,
  min: 2
}), generateDeliverOrderCount)
