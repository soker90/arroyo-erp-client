import { connect } from 'react-redux';

import { editNote } from '../../modules/actions';
import EditProductModalView from './EditNoteModalView';

const mapDispatchToProps = {
  editNote,
};

export default connect(
  null,
  mapDispatchToProps
)(EditProductModalView);
