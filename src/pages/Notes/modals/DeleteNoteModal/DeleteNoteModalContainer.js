import { connect } from 'react-redux'

import { deleteNote } from 'pages/Notes/modules/actions'
import DeleteNoteModal from './DeleteNoteModal'

const mapDispatchToProps = {
  deleteNote
}

export default connect(
  null,
  mapDispatchToProps
)(DeleteNoteModal)
