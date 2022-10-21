import {
  boolean, number, select, text
} from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import { story as InputForm } from './InputForm'

export default {
  title: 'Formularios/Input Text',
  parameters: {
    component: InputForm
  }
}

const InputText = () => (
  <InputForm
    variant={select('Estilo', ['filled', 'outlined', 'standard'], 'standard')}
    onChange={action('Ha cambiado el contenido')}
    disabled={boolean('Deshabilitado', false)}
    label={text('Etiqueta', 'Etiqueta')}
    value={text('Texto', 'mi texto')}
    size={number('Tamaño', 6)}
  />
)

InputText.storyName = 'InputText'

const Outlined = () => (
  <InputForm
    variant='outlined'
    onChange={action('Ha cambiado el contenido')}
    disabled={boolean('Deshabilitado', false)}
    label={text('Etiqueta', 'Etiqueta')}
    value={text('Texto', 'mi texto')}
    size={number('Tamaño', 12)}
  />
)

Outlined.storyName = 'Outlined'

const Filled = () => (
  <InputForm
    variant='filled'
    onChange={action('Ha cambiado el contenido')}
    disabled={boolean('Deshabilitado', false)}
    label={text('Etiqueta', 'Etiqueta')}
    value={text('Texto', 'mi texto')}
    size={number('Tamaño', 12)}
  />
)

Filled.storyName = 'Filled'

export { InputText, Outlined, Filled }
