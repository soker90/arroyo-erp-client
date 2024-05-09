import { useEffect, useReducer } from 'react'
import PropTypes from 'prop-types'
import ProviderModal, { INITIAL_STATE } from 'components/Modals/ProviderModal'
import { useProvider } from '../../../../hooks/index.js'

const EditProviderModal = ({
  show, close, provider
}) => {
  const [state, setState] = useReducer(
    (oldState, newState) => ({ ...oldState, ...newState }),
    INITIAL_STATE
  )

  const { editProvider } = useProvider(provider._id)

  useEffect(() => {
    if (show) {
      setState({
        ...INITIAL_STATE,
        ...provider
      })
    }
    // eslint-disable-next-line
  }, [show])

  /**
   * Handle event save button
   * @private
   */
  const _handleSubmit = () => {
    editProvider(state, close)
  }

  return (
    <ProviderModal
      show={show}
      close={close}
      title={`Editar «${provider.name}»`}
      action={_handleSubmit}
      state={state}
      setState={setState}
    />
  )
}

EditProviderModal.propTypes = {
  show: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  editProvider: PropTypes.func.isRequired,
  provider: PropTypes.object.isRequired
}

export default EditProviderModal
