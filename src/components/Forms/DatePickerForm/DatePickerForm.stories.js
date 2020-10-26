import {
  boolean, date, number, text,
} from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import MomentUtils from '@date-io/moment';
import 'moment/locale/es';

import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { story as DatePickerForm } from './DatePickerForm';

export default {
  title: 'Formularios/DatePicker',
  parameters: {
    component: DatePickerForm,
    componentSubtitle: 'Selector de fecha',
  },
  decorators: [storyFn => <MuiPickersUtilsProvider utils={MomentUtils}>{storyFn()}</MuiPickersUtilsProvider>],
};

const Generic = () => (
  <DatePickerForm
    size={number('Tamaño', 3)}
    clearable={boolean('Con botón de limpiar', false)}
    label={text('Label', 'Etiqueta')}
    value={date('Fecha', new Date())}
    onChange={action('Fecha cambiada')}
  />
);

Generic.storyName = 'DatePicker';

const DatePickerClear = () => (
  <DatePickerForm
    size={number('Tamaño', 3)}
    clearable
    label={text('Label', 'Etiqueta')}
    value={date('Fecha', new Date())}
    onChange={action('Fecha cambiada')}
  />
);

DatePickerClear.storyName = 'Con botón de limpiar';

export { Generic, DatePickerClear };
