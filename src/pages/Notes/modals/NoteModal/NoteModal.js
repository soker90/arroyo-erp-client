import { memo } from 'react';
import PropTypes from 'prop-types';

import { DatePickerForm, InputForm, ModalGrid } from 'components';
import { INPUTS } from './constants';

const NoteModal = ({
  show, close, state, setState, action, title,
}) => {
  /**
   * Handle event onChange input
   * @param {String} name
   * @param {String} value
   * @private
   */
  const _handleChange = ({ target: { name, value } }) => {
    setState({ [name]: value });
  };

  /**
   * Handle change picker
   * @param {String} date
   * @private
   */
  const _handleChangePicker = date => {
    setState({ date });
  };

  /**
   * Handle event save button
   * @private
   */
  const _handleSubmit = () => {
    const model = {
      date: state.date,
      concept: state.concept,
      quantity: state.quantity,
      price: state.price,
      amount: state.amount,
      clarification: state.clarification,
    };
    action(model, close);
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
  // eslint-disable-next-line react/prop-types
  const _renderInput = ({ name, label }) => (
    <InputForm
      key={name}
      value={state[name] || ''}
      onChange={_handleChange}
      name={name}
      label={label}
      onKeyPress={_handleKeyPress}
    />
  );

  return (
    <ModalGrid
      show={show}
      close={close}
      action={_handleSubmit}
      title={title}
    >
      <DatePickerForm
        clearable
        size={6}
        label='Fecha'
        value={state.date}
        onAccept={_handleChangePicker}
        autoFocus
      />
      {INPUTS.map(_renderInput)}
    </ModalGrid>
  );
};

NoteModal.propTypes = {
  show: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  state: PropTypes.object,
  setState: PropTypes.func.isRequired,
  action: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

NoteModal.displayName = 'NoteModal';
export default memo(NoteModal);
