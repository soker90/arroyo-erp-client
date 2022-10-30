import { faker } from '@faker-js/faker'
import { rangeFill } from 'utils'

const generateClientBilling = () => ({
  _id: faker.database.mongodbObjectId(),
  name: faker.company.bsNoun(),
  invoices: faker.datatype.number({
    min: 0,
    max: 100
  }),
  pending: faker.datatype.number({
    min: 0,
    max: 100
  })

})

export const clientBillingsResponse = () => rangeFill(faker.datatype.number({
  max: 40,
  min: 2
}), generateClientBilling)
