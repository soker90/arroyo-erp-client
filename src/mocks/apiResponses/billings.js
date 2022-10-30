import { faker } from '@faker-js/faker'
import { rangeFill } from 'utils'

const generateBilling = () => ({
  name: faker.company.bsNoun(),
  businessName: faker.company.name(),
  trimester1: faker.datatype.float({
    min: 0
  }),
  trimester2: faker.datatype.float({
    min: 0
  }),
  trimester3: faker.datatype.float({
    min: 0
  }),
  trimester4: faker.datatype.float({
    min: 0
  }),
  invoices1: faker.datatype.number({
    min: 0,
    max: 100
  }),
  invoices2: faker.datatype.number({
    min: 0,
    max: 100
  }),
  invoices3: faker.datatype.number({
    min: 0,
    max: 100
  }),
  invoices4: faker.datatype.number({
    min: 0,
    max: 100
  }),
  annual: faker.datatype.float({
    min: 0
  }),
  annualInvoices: faker.datatype.number({
    min: 0,
    max: 100
  })
})

export const billingsResponse = () => rangeFill(faker.datatype.number({
  max: 40,
  min: 2
}), generateBilling)
