import { connect } from 'react-redux';

import DeletePriceChangeModal from './DeletePriceChangeModal';
import { deletePriceChanges } from '../../modules/actions';

const mapDispatchToProps = {
  deletePriceChanges,
};

export default connect(
  null,
  mapDispatchToProps,
)(DeletePriceChangeModal);
