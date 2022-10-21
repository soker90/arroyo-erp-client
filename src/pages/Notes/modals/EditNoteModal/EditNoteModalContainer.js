import { connect } from 'react-redux'

import { editNote } from '../../modules/actions'
import EditNoteModalView from './EditNoteModalView'

const mapDispatchToProps = {
  editNote
}

export default connect(
  null,
  mapDispatchToProps
)(EditNoteModalView)
