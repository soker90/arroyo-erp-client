import {
  boolean, date, number, text
} from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import MomentUtils from '@date-io/moment';
import 'moment/locale/es';

import AdapterMoment from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { story as DatePickerForm } from './DatePickerForm';

export default {
  title: 'Formularios/DatePicker',
  parameters: {
    component: DatePickerForm,
    componentSubtitle: 'Selector de fecha'
  },
  decorators: [storyFn => <LocalizationProvider dateAdapter={AdapterMoment}>
    {storyFn()}</LocalizationProvider>]
};

const Generic = () => (
  <DatePickerForm
    size={number('Tamaño', 3)}
    clearable={boolean('Con botón de limpiar', false)}
    label={text('Label', 'Etiqueta')}
    value={date('Fecha', new Date(1609428038070))}
    onChange={action('Fecha cambiada')}
  />
);

Generic.storyName = 'DatePicker';

const DatePickerClear = () => (
  <DatePickerForm
    size={number('Tamaño', 3)}
    clearable
    label={text('Label', 'Etiqueta')}
    value={date('Fecha', new Date(1609428038070))}
    onChange={action('Fecha cambiada')}
  />
);

DatePickerClear.storyName = 'Con botón de limpiar';

export { Generic, DatePickerClear };
