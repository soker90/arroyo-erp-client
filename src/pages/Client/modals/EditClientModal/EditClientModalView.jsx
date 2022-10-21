import { useEffect, useReducer } from 'react'
import PropTypes from 'prop-types'
import ClientModal, { INITIAL_STATE } from 'components/Modals/ClientModal'

const EditClientModal = ({
  show, close, editClient, client
}) => {
  const [state, setState] = useReducer(
    (oldState, newState) => ({ ...oldState, ...newState }),
    INITIAL_STATE
  )

  useEffect(() => {
    if (show) {
      setState({
        ...INITIAL_STATE,
        ...client
      })
    }
    // eslint-disable-next-line
  }, [show]);

  /**
   * Handle event save button
   * @private
   */
  const _handleSubmit = () => {
    editClient(client._id, state, close)
  }

  return (
    <ClientModal
      show={show}
      close={close}
      title={`Editar «${client.name}»`}
      action={_handleSubmit}
      state={state}
      setState={setState}
    />
  )
}

EditClientModal.propTypes = {
  show: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  editClient: PropTypes.func.isRequired,
  client: PropTypes.object.isRequired
}

EditClientModal.displayName = 'EditClientModal'

export default EditClientModal
