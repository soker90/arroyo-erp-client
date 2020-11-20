import { memo, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';

import ClientModal, { INITIAL_STATE } from 'components/Modals/ClientModal';

const NewProviderModal = ({
  show,
  close,
  createClient,
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
    createClient(state, close);
  };

  return (
    <ClientModal
      show={show}
      close={close}
      title='Crear cliente'
      action={_handleSubmit}
      state={state}
      setState={setState}
    />
  );
};

NewProviderModal.propTypes = {
  show: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  createClient: PropTypes.func.isRequired,
};

NewProviderModal.displayName = 'NewProviderModal';

export const story = NewProviderModal;
export default memo(NewProviderModal);
