import { billingsHandlers } from './billings'
import { clientBillingsHandlers } from './clientBillings'
import { clientsHandlers } from './clients'
import { deliveryOrdersHandlers } from './deliveryorders'
import { invoicesHandlers } from './invoices'

export const handlers = [
  ...billingsHandlers,
  ...clientBillingsHandlers,
  ...clientsHandlers,
  ...deliveryOrdersHandlers,
  ...invoicesHandlers
]
