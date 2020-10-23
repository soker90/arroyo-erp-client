import { memo, useReducer } from 'react';
import PropTypes from 'prop-types';

import { ModalGrid, InputForm } from 'components';

const EditTotalsModalView = ({
  show, setShow, total, iva, re, rate, taxBase, update, id,
}) => {
  const [state, setState] = useReducer(
    (oldState, newState) => ({ ...oldState, ...newState }),
    {
      total,
      iva,
      re,
      ...(rate && { rate }),
      taxBase,
    },
  );

  const [errors, setErrors] = useReducer(
    (oldState, newState) => ({ ...oldState, ...newState }),
    {
      total: false,
      iva: false,
      re: false,
      rate: false,
      taxBase: false,
    },
  );

  /**
   * Handle event onChange input
   * @param {String} name
   * @param {String} value
   * @private
   */
  const _handleChange = ({ target: { name, value } }) => {
    const number = parseFloat(value);
    setState({ [name]: number });
    setErrors({ [name]: (typeof number !== 'number') });
  };

  const _close = () => {
    setShow(false);
  };

  const _handleSubmit = () => {
    update(id, {
      totals: state,
    }, _close);
  };

  /**
   * Handle press enter key
   * @param {string} key
   * @private
   */
  const _handleKeyPress = ({ key }) => {
    if (key === 'Enter') _handleSubmit();
  };

  /**
   * Render a input element
   * @param {string} name
   * @param {String} label
   * @returns {InputForm}
   * @private
   */
  const _renderInput = (name, label) => (
    <InputForm
      value={state[name] || 0}
      onChange={_handleChange}
      name={name}
      label={label}
      InputLabelProps={{
        shrink: true,
      }}
      type='number'
      size={4}
      onKeyPress={_handleKeyPress}
      error={errors[name]}
    />
  );

  return (
    <ModalGrid
      show={show}
      setShow={setShow}
      title='Editar totales'
      action={_handleSubmit}
    >
      {_renderInput('taxBase', 'Base imponible')}
      {_renderInput('iva', 'IVA')}
      {_renderInput('re', 'Recargo')}
      {Boolean(rate) && _renderInput('rate', 'Tasa')}
      {_renderInput('total', 'Total')}
    </ModalGrid>
  );
};

EditTotalsModalView.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
  total: PropTypes.number,
  iva: PropTypes.number,
  re: PropTypes.number,
  rate: PropTypes.number,
  taxBase: PropTypes.number,
  id: PropTypes.string.isRequired,
  update: PropTypes.func.isRequired,
};

EditTotalsModalView.displayName = 'EditInvoiceDataModalView';
export const story = EditTotalsModalView;
export default memo(EditTotalsModalView);
