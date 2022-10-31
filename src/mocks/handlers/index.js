import { billingsHandlers } from './billings'
import { clientInvoicesHandlers } from './clientInvoices'
import { clientsHandlers } from './clients'
import { deliveryOrdersHandlers } from './deliveryorders'
import { invoicesHandlers } from './invoices'

export const handlers = [
  ...billingsHandlers,
  ...clientInvoicesHandlers,
  ...clientsHandlers,
  ...deliveryOrdersHandlers,
  ...invoicesHandlers
]
