import { faker } from '@faker-js/faker'
import { rangeFill } from 'utils'

const generateDeliverOrderCount = () => ({
  provider: faker.database.mongodbObjectId(),
  name: faker.company.name(),
  total: faker.datatype.number({
    min: 0,
    max: 400
  }),
  1: faker.datatype.number({
    min: 0,
    max: 100
  }),
  2: faker.datatype.number({
    min: 0,
    max: 100
  }),
  3: faker.datatype.number({
    min: 0,
    max: 100
  }),
  4: faker.datatype.number({
    min: 0,
    max: 100
  })
})

export const deliveryOrdersCountFreeResponse = () => rangeFill(faker.datatype.number({
  max: 40,
  min: 2
}), generateDeliverOrderCount)
