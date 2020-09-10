import { connect } from 'react-redux';

import { createNote } from 'pages/Notes/modules/actions';
import NewNoteModalView from './NewNoteModalView';

const mapDispatchToProps = {
  createNote,
};

export default connect(
  null,
  mapDispatchToProps,
)(NewNoteModalView);
