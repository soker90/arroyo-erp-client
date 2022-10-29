import { clientsHandlers } from './clients'
import { invoicesHandlers } from './invoices'

export const handlers = [
  ...clientsHandlers,
  ...invoicesHandlers
]
