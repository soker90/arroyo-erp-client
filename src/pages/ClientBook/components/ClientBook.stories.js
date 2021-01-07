import { action } from '@storybook/addon-actions';

import MomentUtils from '@date-io/moment';
import { ReduxProvider } from 'story';
import RoutesWrapper from 'story/RoutesWrapper';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { story as ClientBook } from './ClientBook';

export default {
  title: 'Rutas/Libro Cliente',
  parameters: {
    component: ClientBook,
    componentSubtitle: 'Vista',
  },
  decorators: [storyFn => (
    <ReduxProvider>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <RoutesWrapper>
          {storyFn()}
        </RoutesWrapper>
      </MuiPickersUtilsProvider>
    </ReduxProvider>
  ),
  ],
};

const BookStory = () => (
  <ClientBook
    invoices={
      [
        {
          _id: '5f149fb967012016a09e15fb',
          total: 7.62,
          nameClient: 'Primero',
          date: 1595101920000,
          nInvoice: '21-22',
        },
      ]
    }
    getClientInvoices={action('getClientInvoices')}
    match={{ params: { id: 'ggggg7777' } }}
  />
);

BookStory.storyName = 'Vista';

export { BookStory };
