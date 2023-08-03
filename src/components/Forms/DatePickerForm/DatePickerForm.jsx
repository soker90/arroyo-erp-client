import PropTypes from 'prop-types'
import { Grid } from '@mui/material'
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker'
import dayjs from 'dayjs'

import { useStyles } from './DatePickerForm.styles'

const DatePickerForm = (
  {
    size = 6,
    variant = 'standard',
    format = 'DD/MM/YYYY',
    autoOk = true,
    value = null,
    disabled,
    clearable,
    ...rest
  }
) => {
  const classes = useStyles()

  return (
    <Grid
      item
      md={size}
      xs={12}
    >
      <MobileDatePicker
        disableToolbar
        clearable
        allowSameDateSelection
        className={classes.picker}
        showToolbar={false}
        format={format}
        inputVariant={variant}
        closeOnSelect={autoOk}
        slotProps={{
          textField: { variant, fullWidth: true, disabled },
          actionBar: { actions: [...(clearable ? ['clear'] : ''), 'accept', 'cancel'] },
        }}
        value={value === null ? null : dayjs(value)}
        {...rest}
      />
    </Grid>
  )
}

DatePickerForm.propTypes = {
  /**
   * Clase de estilos
   */
  className: PropTypes.string,
  /**
   * Etiqueta del componente
   */
  label: PropTypes.string.isRequired,
  /**
   * Fecha
   */
  // eslint-disable-next-line max-len
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date), PropTypes.number, PropTypes.object]),
  /**
   * Función ejecutada al seleccionar una fecha
   */
  onChange: PropTypes.func.isRequired,
  /**
   * Deshabilita las fechas posteriores a la fecha
   */
  disableFuture: PropTypes.bool,
  /**
   * Formato en el que se mostrará la fecha
   */
  format: PropTypes.string,
  /**
   * Tamaño del componente dentro de un Grid
   */
  size: PropTypes.number,
  /**
   * Para aceptar al selleccionar la fecha, sin darle a aceptar
   */
  autoOk: PropTypes.bool,
  /**
   * Añade un botón para borrar la fecha
   */
  clearable: PropTypes.bool,
  variant: PropTypes.string,
  closeOnSelect: PropTypes.bool
}

export const story = DatePickerForm
export default DatePickerForm
