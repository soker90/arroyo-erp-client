import { faker } from '@faker-js/faker'
import { rangeFill } from 'utils'
import { TYPE_CLIENT_PAYMENT } from 'constants/invoices'

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

const generateClientInvoice = () => ({
  _id: faker.database.mongodbObjectId(),
  nameClient: faker.company.bsNoun(),
  date: faker.date.past()
    .getTime(),
  total: faker.datatype.float({
    min: 0
  }),
  nInvoice: `${faker.datatype.number({
    min: 20,
    max: 29
  })}/${faker.datatype.number({
    min: 10,
    max: 99
  })}`,
  ...(faker.datatype.boolean() && { paid: true }),
  paymentDate: faker.date.past()
    .getTime(),
  paymentType: faker.helpers.arrayElement(Object.values(TYPE_CLIENT_PAYMENT))
})

export const clientInvoicesResponse = () => rangeFill(faker.datatype.number({
  max: 40,
  min: 2
}), generateClientInvoice)
