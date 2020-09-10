import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { DatePicker } from '@material-ui/pickers';

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
      <DatePicker
        disableToolbar
        className={classes.picker}
        onChange={() => {
        }}
        animateYearScrolling
        format={format}
        inputVariant={variant}
        autoOk={autoOk}
        cancelLabel='Cancelar'
        clearLabel='Limpiar'
        okLabel='Aceptar'
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
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date), PropTypes.number]),
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
export default memo(DatePickerForm);
