import { action } from '@storybook/addon-actions';

import { ReduxProvider } from 'story';
import RoutesWrapper from 'story/RoutesWrapper';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { story as ClientBook } from './ClientBook';
import AdapterMoment from '@mui/lab/AdapterMoment';

export default {
  title: 'Rutas/Libro Cliente',
  parameters: {
    component: ClientBook,
    componentSubtitle: 'Vista',
  },
  decorators: [storyFn => (
    <ReduxProvider>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <RoutesWrapper>
          {storyFn()}
        </RoutesWrapper>
      </LocalizationProvider>
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
