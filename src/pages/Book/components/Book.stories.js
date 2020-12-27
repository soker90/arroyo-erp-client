import { action } from '@storybook/addon-actions';

import MomentUtils from '@date-io/moment';
import { ReduxProvider } from 'story';
import RoutesWrapper from 'story/RoutesWrapper';
import { story as Book } from './Book';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

export default {
  title: 'Rutas/Libro',
  parameters: {
    component: Book,
    componentSubtitle: 'Vista'
  },
  decorators: [storyFn => (
    <ReduxProvider>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <RoutesWrapper>
          {storyFn()}
        </RoutesWrapper>
      </MuiPickersUtilsProvider>
    </ReduxProvider>
  )
  ]
};

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
  />
);

BookStory.storyName = 'Vista';

export { BookStory };
