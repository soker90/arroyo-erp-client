import { useEffect, useReducer } from 'react'
import PropTypes from 'prop-types'

import ClientModal, { INITIAL_STATE } from 'components/Modals/ClientModal'
import { useCreateClient } from '../../hooks'

const NewProviderModal = ({
  show,
  close
}) => {
  const [state, setState] = useReducer(
    (oldState, newState) => ({ ...oldState, ...newState }),
    INITIAL_STATE
  )
  const { addClient } = useCreateClient()

  useEffect(() => {
    if (!show) setState(INITIAL_STATE)
  }, [show])

  const _handleSubmit = () => {
    addClient(state, close)
  }

  return (
    <ClientModal
      show={show}
      close={close}
      title='Crear cliente'
      action={_handleSubmit}
      state={state}
      setState={setState}
    />
  )
}

NewProviderModal.propTypes = {
  show: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired
}

export default NewProviderModal
