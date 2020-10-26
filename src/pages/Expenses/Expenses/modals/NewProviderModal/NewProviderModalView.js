import { memo, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';

import ProviderModal, { INITIAL_STATE } from 'components/Modals/ProviderModal';

const NewProviderModal = ({
  show,
  close,
  createProvider,
}) => {
  const [state, setState] = useReducer(
    (oldState, newState) => ({ ...oldState, ...newState }),
    INITIAL_STATE,
  );

  useEffect(() => {
    if (!show) setState(INITIAL_STATE);
  }, [show]);

  /**
   * Handle event save button
   * @private
   */
  const _handleSubmit = () => {
    createProvider(state, close);
  };

  return (
    <ProviderModal
      show={show}
      close={close}
      title='Crear proveedor de gasto'
      action={_handleSubmit}
      state={state}
      setState={setState}
    />
  );
};

NewProviderModal.propTypes = {
  show: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  createProvider: PropTypes.func.isRequired,
};

NewProviderModal.displayName = 'NewProviderModal';

export const story = NewProviderModal;
export default memo(NewProviderModal);
