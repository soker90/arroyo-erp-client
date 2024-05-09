import { action } from '@storybook/addon-actions'

import { DatePickerProvider } from 'story'
import RoutesWrapper from 'story/RoutesWrapper'
import Book from './Book'

export default {
  title: 'Rutas/Libro',
  parameters: {
    component: Book,
    componentSubtitle: 'Vista'
  },
  decorators: [storyFn => (
    <DatePickerProvider>
      <RoutesWrapper>
        {storyFn()}
      </RoutesWrapper>
    </DatePickerProvider>
  )
  ]
}

/**
 * code, productName, quantity, price, amount, diff
 */

const BookStory = () => (
  <Book
    invoices={
      [
        {
          _id: '5f149fb967012016a09e15fb',
          total: 7.62,
          nameProvider: 'Primero',
          dateRegister: 1595187129870,
          concept: 'C. mercaderias',
          dateInvoice: 1595101920000,
          nInvoice: '22',
          nOrder: 5
        }
      ]
    }
    getInvoices={action('getInvoices')}
    match={{ params: { id: 'ggggg7777' } }}
  />
)

BookStory.storyName = 'Vista'

export { BookStory }
