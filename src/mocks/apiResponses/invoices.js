import { faker } from '@faker-js/faker'
import { CONCEPT } from 'constants/invoices'
import { rangeFill } from 'utils'

const generateInvoice = () => ({
  _id: faker.database.mongodbObjectId(),
  dateInvoice: faker.date.past().getTime(),
  dateRegister: faker.date.past().getTime(),
  total: faker.datatype.number({ min: 1 }),
  nOrder: faker.datatype.number({ min: 1 }),
  nInvoice: faker.datatype.number({ min: 1 }),
  concept: faker.helpers.arrayElement(Object.values(CONCEPT)),
  businessName: faker.company.name()
})

export const invoicesResponse = () => {
  const numInvoices = faker.datatype.number({
    max: 40,
    min: 2
  })

  return { invoices: rangeFill(numInvoices, generateInvoice), count: numInvoices }
}
