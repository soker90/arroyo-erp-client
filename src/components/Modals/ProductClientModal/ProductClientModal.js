/* eslint-disable react/prop-types */
import { memo } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { InputForm, ModalGrid } from 'components';
import { addNotification } from 'reducers/notifications';
import { fields } from './constants';

const ProductClientModal = ({
  show,
  close,
  state,
  setState,
  action,
  ...rest
}) => {
  const dispatch = useDispatch();

  /**
   * Handle event onChange input
   * @param {String} name
   * @param {String} value
   * @private
   */
  const _handleChange = ({
    target: {
      name,
      value,
    },
  }) => {
    setState({ [name]: value });
  };

  /**
   * Handle event save button
   * @private
   */
  const _handleSubmit = () => {
    try {
      const model = {
        code: state.code.toLowerCase(),
        name: state.name,
        price: Number(state.price),
      };
      action(model, close);
    } catch (e) {
      console.error(e);
      dispatch(addNotification({
        level: 'error',
        message: 'El precio no es correcto',
        dismissible: true,
      }));
    }
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
   * @param {string} id
   * @param {String} label
   * @param {Object} options
   * @returns {JSX.Element}
   * @private
   */
  const _renderInput = ({
    id,
    label,
    ...options
  }) => (
    <InputForm
      key={id}
      value={state[id] || ''}
      onChange={_handleChange}
      name={id}
      label={label}
      onKeyPress={_handleKeyPress}
      {...options}
    />
  );

  return (
    <ModalGrid
      show={show}
      close={close}
      action={_handleSubmit}
      {...rest}
    >
      {fields.map(_renderInput)}
    </ModalGrid>
  );
};

ProductClientModal.propTypes = {
  show: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
  setState: PropTypes.func.isRequired,
  action: PropTypes.func.isRequired,
};

ProductClientModal.displayName = 'ProductClientModal';
export const story = ProductClientModal;
export default memo(ProductClientModal);
