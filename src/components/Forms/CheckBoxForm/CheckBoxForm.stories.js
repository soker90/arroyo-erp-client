import {
  boolean, number, select, text
} from '@storybook/addon-knobs'
import { Grid } from 'components'
import { action } from '@storybook/addon-actions'

import { story as CheckBoxForm } from './CheckBoxForm'

export default {
  title: 'Formularios/Check',
  parameters: {
    component: CheckBoxForm
  }
}

const CheckBox = () => (
  <Grid container spacing={3}>
    <CheckBoxForm
      label={text('Label', 'Checkbox')}
      checked={boolean('Activo', true)}
      disabled={boolean('Desabilitado', false)}
      size={number('Tamaño', 6)}
      onChange={action('Estado de checkbox cambiado')}
      color={select('Color', ['primary', 'secondary', 'default'], 'primary')}
    />
  </Grid>
)

CheckBox.storyName = 'CheckBox'

export { CheckBox }
