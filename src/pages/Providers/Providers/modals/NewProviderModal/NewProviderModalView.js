import { memo, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';

import ProviderModal, { INITIAL_STATE } from 'components/Modals/ProviderModal';
import { TYPE_PROVIDER } from 'constants/providers';

const NewProviderModal = ({
  show,
  close,
  createProvider,
}) => {
  const initialStateNew = {
    ...INITIAL_STATE,
    type: TYPE_PROVIDER.GENERAL,
  };

  const [state, setState] = useReducer(
    (oldState, newState) => ({ ...oldState, ...newState }),
    initialStateNew,
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
      title='Crear proveedor'
      action={_handleSubmit}
      state={state}
      setState={setState}
      hasType
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
