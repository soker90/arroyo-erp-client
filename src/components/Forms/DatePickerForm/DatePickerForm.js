import PropTypes from 'prop-types';
import { Grid, TextField } from '@mui/material';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';

import { useStyles } from './DatePickerForm.styles';

const DatePickerForm = (
  {
    size,
    variant,
    format,
    autoOk,
    ...rest
  },
) => {
  const classes = useStyles();

  return (
    <Grid item md={size} xs={12}>
      <DesktopDatePicker
        className={classes.picker}
        onChange={() => {
        }}
        inputFormat={format}
        leftArrowButtonText='Mes anterior'
        rightArrowButtonText='Mes siguiente'
        okLabel='Aceptar'
        renderInput={params => <TextField {...params} />}
        {...rest}
      />
    </Grid>
  );
};

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
   * Función par el botón de aceptar
   */
  onAccept: PropTypes.func,
  /**
   * Función ejecutada al seleccionar una fecha
   */
  onChange: PropTypes.func,
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
};

DatePickerForm.defaultProps = {
  format: 'DD/MM/YYYY',
  size: 6,
  autoOk: true,
  value: null,
};

DatePickerForm.displayName = 'DatePickerForm';

export const story = DatePickerForm;
export default DatePickerForm;
