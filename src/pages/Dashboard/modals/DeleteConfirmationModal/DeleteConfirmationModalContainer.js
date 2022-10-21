import { connect } from 'react-redux'

import DeleteConfirmationModal from './DeleteConfirmationModal'
import { deleteReminder } from '../../modules/actions'

const mapDispatchToProps = {
  deleteReminder
}

export default connect(
  null,
  mapDispatchToProps
)(DeleteConfirmationModal)
