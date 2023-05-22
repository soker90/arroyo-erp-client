import { fakerES as faker } from '@faker-js/faker'
import { CONCEPT } from 'constants/invoices'
import { rangeFill } from 'utils'

const generateInvoice = () => ({
  _id: faker.database.mongodbObjectId(),
  dateInvoice: faker.date.past().getTime(),
  dateRegister: faker.date.past().getTime(),
  total: faker.number.int({ min: 1 }),
  nOrder: faker.number.int({ min: 1 }),
  nInvoice: faker.number.int({ min: 1 }),
  concept: faker.helpers.arrayElement(Object.values(CONCEPT)),
  businessName: faker.company.name()
})

export const invoicesResponse = () => {
  const numInvoices = faker.number.int({
    max: 40,
    min: 2
  })

  return { invoices: rangeFill(numInvoices, generateInvoice), count: numInvoices }
}
