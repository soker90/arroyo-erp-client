import { fakerES as faker } from '@faker-js/faker'
import { rangeFill } from 'utils'

const generateBilling = () => ({
  name: faker.company.bsNoun(),
  businessName: faker.company.name(),
  trimester1: faker.number.float({
    min: 0
  }),
  trimester2: faker.number.float({
    min: 0
  }),
  trimester3: faker.number.float({
    min: 0
  }),
  trimester4: faker.number.float({
    min: 0
  }),
  invoices1: faker.number.int({
    min: 0,
    max: 100
  }),
  invoices2: faker.number.int({
    min: 0,
    max: 100
  }),
  invoices3: faker.number.int({
    min: 0,
    max: 100
  }),
  invoices4: faker.number.int({
    min: 0,
    max: 100
  }),
  annual: faker.number.float({
    min: 0
  }),
  annualInvoices: faker.number.int({
    min: 0,
    max: 100
  })
})

export const billingsResponse = () => rangeFill(faker.number.int({
  max: 40,
  min: 2
}), generateBilling)
